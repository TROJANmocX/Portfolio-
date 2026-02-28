import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, Zap, ExternalLink } from 'lucide-react';

interface LeetCodeData {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
  acceptanceRate: number;
}

const USERNAME = 'trojanmocx';

const DifficultyBar: React.FC<{
  label: string;
  solved: number;
  total: number;
  color: string;
  bgColor: string;
  delay?: number;
}> = ({ label, solved, total, color, bgColor, delay = 0 }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between items-center">
      <span className="text-xs font-bold uppercase tracking-widest" style={{ color }}>
        {label}
      </span>
      <span className="text-xs font-mono text-slate-400">
        <span className="text-white font-bold">{solved}</span> / {total}
      </span>
    </div>
    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: bgColor }}>
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${(solved / total) * 100}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut', delay }}
      />
    </div>
  </div>
);

const LeetCodeStats: React.FC = () => {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${USERNAME}`);
        if (!res.ok) throw new Error('Failed');
        const json = await res.json();
        if (json.status === 'error') throw new Error('Not found');
        setData(json);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const solvedPct = data ? Math.round((data.totalSolved / data.totalQuestions) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
          <Code2 className="text-yellow-400" size={20} />
        </div>
        <div>
          <h3 className="text-lg font-black text-white uppercase tracking-tight">LeetCode Stats</h3>
          <a
            href={`https://leetcode.com/u/${USERNAME}`}
            target="_blank" rel="noopener noreferrer"
            className="text-xs text-slate-500 hover:text-yellow-400 transition-colors font-mono flex items-center gap-1"
          >
            @{USERNAME} <ExternalLink size={10} />
          </a>
        </div>
      </div>

      {loading ? (
        <div className="space-y-4 animate-pulse">
          <div className="h-28 bg-white/5 rounded-xl" />
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => <div key={i} className="h-8 bg-white/5 rounded-lg" />)}
          </div>
        </div>
      ) : error ? (
        <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
          <p className="text-slate-500 text-sm">Could not load LeetCode stats.</p>
          <a
            href={`https://leetcode.com/u/${USERNAME}`}
            target="_blank" rel="noopener noreferrer"
            className="text-yellow-400 text-xs font-bold uppercase tracking-wider hover:underline mt-2 inline-block"
          >
            View Profile →
          </a>
        </div>
      ) : data && (
        <>
          {/* Summary ring */}
          <div className="flex items-center gap-6 p-5 bg-white/5 rounded-xl border border-white/10">
            {/* Circular progress */}
            <div className="relative w-24 h-24 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
                <motion.circle
                  cx="50" cy="50" r="42" fill="none"
                  stroke="#facc15" strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 42}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                  whileInView={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - solvedPct / 100) }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-black text-white">{data.totalSolved}</span>
                <span className="text-[9px] text-slate-500 font-bold uppercase">Solved</span>
              </div>
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <Trophy size={14} className="text-yellow-400" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Rank <span className="text-white">#{data.ranking.toLocaleString()}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-[#EC1D24]" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span className="text-white">{solvedPct}%</span> of all problems
                </span>
              </div>
              <p className="text-[10px] text-slate-600 font-mono">
                {data.totalSolved} / {data.totalQuestions} total
              </p>
            </div>
          </div>

          {/* Difficulty breakdown */}
          <div className="p-5 bg-white/5 rounded-xl border border-white/10 space-y-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">By Difficulty</p>
            <DifficultyBar label="Easy" solved={data.easySolved} total={data.totalEasy}
              color="#22c55e" bgColor="rgba(34,197,94,0.1)" delay={0} />
            <DifficultyBar label="Medium" solved={data.mediumSolved} total={data.totalMedium}
              color="#f59e0b" bgColor="rgba(245,158,11,0.1)" delay={0.15} />
            <DifficultyBar label="Hard" solved={data.hardSolved} total={data.totalHard}
              color="#EC1D24" bgColor="rgba(236,29,36,0.1)" delay={0.3} />
          </div>
        </>
      )}
    </div>
  );
};

export default LeetCodeStats;
