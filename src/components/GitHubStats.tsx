import React, { useEffect, useState } from 'react';
import { Github, Star, Users, BookOpen, ExternalLink } from 'lucide-react';

interface GitHubUser {
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  name: string;
}

const USERNAME = 'TROJANmocX';

const StatBadge: React.FC<{ icon: React.ReactNode; label: string; value: string | number; color?: string }> = ({
  icon, label, value, color = '#EC1D24'
}) => (
  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 shrink-0">
    <div style={{ color }}>{icon}</div>
    <div className="flex flex-col">
      <span className="text-xs font-black text-white leading-none">{value}</span>
      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
    </div>
  </div>
);

const GitHubStats: React.FC = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${USERNAME}`);
        const userData: GitHubUser = await res.json();
        setUser(userData);
      } catch (e) {
        console.error('GitHub fetch error:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#EC1D24]/10 rounded-lg border border-[#EC1D24]/30 shrink-0">
            <Github className="text-[#EC1D24]" size={18} />
          </div>
          <div>
            <h3 className="text-sm font-black text-white uppercase tracking-tight leading-tight">GitHub</h3>
            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank" rel="noopener noreferrer"
              className="text-[10px] text-slate-500 hover:text-[#EC1D24] transition-colors font-mono flex items-center gap-1"
            >
              @{USERNAME} <ExternalLink size={8} />
            </a>
          </div>
        </div>

        {/* Small Badges */}
        {loading ? (
          <div className="flex gap-2 animate-pulse">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-8 w-20 bg-white/5 rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-2">
            <StatBadge icon={<BookOpen size={14} />} label="Repos" value={user?.public_repos ?? 0} />
            <StatBadge icon={<Users size={14} />} label="Followers" value={user?.followers ?? 0} color="#60a5fa" />
            <StatBadge icon={<Star size={14} />} label="Gists" value={user?.public_gists ?? 0} color="#f59e0b" />
          </div>
        )}
      </div>

      {!loading && (
        <div className="rounded-lg overflow-hidden border border-white/10 bg-[#0d1117] p-2">
          <img
            src={`https://ghchart.rshah.org/e01d24/${USERNAME}`}
            alt="GitHub Contribution Chart"
            className="w-full opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default GitHubStats;
