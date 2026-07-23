import React, { useState } from 'react';
import { Award, Info, ChevronRight, Sparkles, Target, CheckCircle, ShieldCheck, Eye, Layers } from 'lucide-react';

interface RecognitionExplanationPanelProps {
  onHighlightBadge?: () => void;
  onOpenAccount?: () => void;
  onOpenCart?: () => void;
}

export const RecognitionExplanationPanel: React.FC<RecognitionExplanationPanelProps> = ({
  onHighlightBadge,
  onOpenAccount,
  onOpenCart,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'breakdown' | 'psychology' | 'closers'>('overview');

  return (
    <aside
      id="closers-explanation-panel"
      className="bg-[#111315] text-[#e2e2e2] flex flex-col h-full border-l border-[#2e3135] shadow-2xl overflow-y-auto select-text font-sans-work"
    >
      {/* Header Banner */}
      <div className="p-6 md:p-8 bg-gradient-to-r from-[#1a1d21] via-[#212529] to-[#181a1d] border-b border-[#2e3135]">
        <div className="flex items-center space-x-2 text-[10px] font-bold tracking-[0.25em] text-[#d4af37] uppercase mb-2">
          <Sparkles size={14} className="text-[#d4af37]" />
          <span>PERSUASIVE UX DESIGN • CLOSERS FRAMEWORK</span>
        </div>
        <h2 className="font-serif-display text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight">
          The 'Recognition' Principle
        </h2>
        <p className="text-xs text-[#a0a5ab] leading-relaxed mt-2 font-normal">
          A behavioral UX analysis of how status tiers, personalized acknowledgment, and progress tracking motivate user retention and higher lifetime value.
        </p>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex border-b border-[#2e3135] bg-[#16181b] px-4 pt-2">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'breakdown', label: 'UI Implementation' },
          { id: 'psychology', label: 'Psychology' },
          { id: 'closers', label: 'CLOSERS Model' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 pb-3 text-[10px] font-bold tracking-[0.15em] uppercase transition-all cursor-pointer text-center ${
              activeTab === tab.id
                ? 'border-b-2 border-[#d4af37] text-[#d4af37]'
                : 'text-[#888c94] hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Body Content */}
      <div className="p-6 md:p-8 space-y-8 flex-1">
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Live Highlight Card */}
            <div className="p-5 bg-[#1c2024] border border-[#d4af37]/40 rounded-none space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#d4af37] text-black text-[9px] font-bold px-3 py-0.5 tracking-widest uppercase">
                LIVE DEMO
              </div>
              <div className="flex items-center space-x-2 text-[#d4af37]">
                <Award size={18} />
                <h4 className="text-sm font-bold tracking-wider text-white uppercase">
                  User Context: John Tan ($123 Spend)
                </h4>
              </div>
              <p className="text-xs text-[#c4c8ce] leading-relaxed">
                Notice the top-right header on the left panel. As a logged-in client, <strong>John Tan</strong> is explicitly recognized as an <span className="text-[#d4af37] font-semibold">Achiever</span> based on his cumulative spend of <strong>S$123</strong>.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  onClick={onOpenAccount}
                  className="bg-[#d4af37] text-black px-3.5 py-2 text-[10px] font-bold tracking-wider uppercase hover:bg-[#e5c158] transition-colors cursor-pointer flex items-center space-x-1.5"
                >
                  <Eye size={13} />
                  <span>View John's VIP Profile</span>
                </button>
              </div>
            </div>

            {/* Core Summary */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#d4af37]">
                What is Recognition in Persuasive Design?
              </h3>
              <p className="text-xs text-[#c4c8ce] leading-relaxed font-normal">
                In persuasive technology, the <strong>Recognition Principle</strong> leverages the human psychological drive for <em>status, validation, and accomplishment</em>. Rather than keeping client effort invisible, the interface proactively acknowledges milestones, status tiers, and contributions.
              </p>

              <div className="grid grid-cols-1 gap-3 pt-2">
                <div className="p-4 bg-[#181a1d] border border-[#2e3135] space-y-1.5">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-white flex items-center space-x-1.5">
                    <CheckCircle size={14} className="text-[#d4af37]" />
                    <span>1. Status Tiering</span>
                  </span>
                  <p className="text-[11px] text-[#9da2a8] leading-relaxed">
                    Categorizing users into meaningful tiers (Explorer, Achiever, Champion) creates clear intrinsic motivation and goal benchmarks.
                  </p>
                </div>

                <div className="p-4 bg-[#181a1d] border border-[#2e3135] space-y-1.5">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-white flex items-center space-x-1.5">
                    <CheckCircle size={14} className="text-[#d4af37]" />
                    <span>2. Goal Gradient Effect</span>
                  </span>
                  <p className="text-[11px] text-[#9da2a8] leading-relaxed">
                    By showing John Tan at $123 spend, he knows he is only $77.01 away from unlocking the prestigious <strong>Champion</strong> tier ($200+).
                  </p>
                </div>

                <div className="p-4 bg-[#181a1d] border border-[#2e3135] space-y-1.5">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-white flex items-center space-x-1.5">
                    <CheckCircle size={14} className="text-[#d4af37]" />
                    <span>3. Social Esteem & Pride</span>
                  </span>
                  <p className="text-[11px] text-[#9da2a8] leading-relaxed">
                    Prominently placing the badge on the navigation bar provides continuous visual reward during the entire browsing session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BREAKDOWN TAB */}
        {activeTab === 'breakdown' && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#d4af37]">
              Live UI Feature Breakdown
            </h3>

            {/* Level 1 Card */}
            <div className="p-4 bg-[#181a1d] border-l-2 border-[#888c94] space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Tier 1: Explorer
                </span>
                <span className="text-[10px] font-mono text-[#888c94]">S$50 — S$100</span>
              </div>
              <p className="text-xs text-[#a0a5ab] leading-relaxed">
                Entry-level status granted upon initial brand commitment. Validates the client's transition from casual visitor to recognized collector.
              </p>
            </div>

            {/* Level 2 Card (Active) */}
            <div className="p-4 bg-[#1e2329] border-l-2 border-[#d4af37] space-y-2 shadow-md">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                    Tier 2: Achiever
                  </span>
                  <span className="bg-black text-[#d4af37] text-[8px] px-2 py-0.5 font-bold uppercase tracking-widest border border-[#d4af37]/50">
                    CURRENT TIER ($123)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#d4af37]">S$100.01 — S$200</span>
              </div>
              <p className="text-xs text-[#c4c8ce] leading-relaxed">
                Highlighted in gold for John Tan! Validates moderate cumulative spend and provides special benefits like private salon invitations and concierge support.
              </p>
            </div>

            {/* Level 3 Card */}
            <div className="p-4 bg-[#181a1d] border-l-2 border-[#d4af37]/30 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Tier 3: Champion
                </span>
                <span className="text-[10px] font-mono text-[#d4af37]">S$200.01+</span>
              </div>
              <p className="text-xs text-[#a0a5ab] leading-relaxed">
                The peak achievement tier. Nudges John Tan to make an additional $77 purchase to achieve ultimate VIP status.
              </p>
            </div>

            {/* Tooltip Demonstration Box */}
            <div className="p-5 bg-[#16181b] border border-[#2e3135] space-y-3">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase block">
                HOVER TOOLTIP BEHAVIOR
              </span>
              <p className="text-xs text-[#a0a5ab] leading-relaxed">
                Hovering over the <strong>John Tan / Achiever</strong> badge in the top right corner triggers an interactive popover detailing all 3 achievement thresholds and highlighting his active rank in real time.
              </p>
            </div>
          </div>
        )}

        {/* PSYCHOLOGY TAB */}
        {activeTab === 'psychology' && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#d4af37]">
              Behavioral Psychology Mechanics
            </h3>

            <div className="space-y-4 text-xs text-[#c4c8ce] leading-relaxed">
              <div className="p-4 bg-[#181a1d] border border-[#2e3135] space-y-2">
                <h4 className="font-bold text-white uppercase tracking-wider text-xs flex items-center space-x-2">
                  <Target size={15} className="text-[#d4af37]" />
                  <span>1. Goal-Gradient Hypothesis (Hull, 1932)</span>
                </h4>
                <p className="text-[#a0a5ab]">
                  Organisms increase effort as they approach a goal. By explicitly showing John Tan at <strong>$123 spend</strong>, he perceives himself as more than halfway to the <strong>Champion ($200+)</strong> goal line, increasing his likelihood to purchase.
                </p>
              </div>

              <div className="p-4 bg-[#181a1d] border border-[#2e3135] space-y-2">
                <h4 className="font-bold text-white uppercase tracking-wider text-xs flex items-center space-x-2">
                  <ShieldCheck size={15} className="text-[#d4af37]" />
                  <span>2. Endowment & Status Quo Bias</span>
                </h4>
                <p className="text-[#a0a5ab]">
                  Once users earn a status rank like <em>Achiever</em>, they value it highly and actively work to maintain or upgrade it rather than risk losing their status context.
                </p>
              </div>

              <div className="p-4 bg-[#181a1d] border border-[#2e3135] space-y-2">
                <h4 className="font-bold text-white uppercase tracking-wider text-xs flex items-center space-x-2">
                  <Sparkles size={15} className="text-[#d4af37]" />
                  <span>3. Ambient Affirmation</span>
                </h4>
                <p className="text-[#a0a5ab]">
                  Keeping the status badge persistent on the top right navigation bar acts as continuous micro-affirmation, reinforcing a positive brand identity throughout the browsing experience.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CLOSERS TAB */}
        {activeTab === 'closers' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-4 bg-[#181a1d] border border-[#2e3135] space-y-2">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#d4af37]">
                The CLOSERS Framework
              </h3>
              <p className="text-xs text-[#a0a5ab] leading-relaxed">
                CLOSERS is a high-converting persuasive design blueprint used in modern product strategy:
              </p>
            </div>

            <div className="space-y-2.5 text-xs font-mono">
              {[
                { letter: 'C', title: 'Commitment & Consistency', desc: 'Encouraging incremental user actions.' },
                { letter: 'L', title: 'Likability', desc: 'Aesthetic luxury framing and refined craftsmanship.' },
                { letter: 'O', title: 'Ownership', desc: 'Personalized private client portal and saved bag.' },
                { letter: 'S', title: 'Social Proof', desc: 'Curated editorial perspectives and flagship locations.' },
                { letter: 'E', title: 'Expertise', desc: 'Artisanal heritage descriptions and material details.' },
                { letter: 'R', title: 'RECOGNITION (Highlighted)', desc: 'John Tan Achiever status, tier thresholds, spend progress.', active: true },
                { letter: 'S', title: 'Scarcity', desc: 'Limited edition badges and bespoke stock availability.' },
              ].map((item) => (
                <div
                  key={item.letter}
                  className={`p-3 border transition-all flex items-start space-x-3 ${
                    item.active
                      ? 'bg-[#1e2329] border-[#d4af37] text-white'
                      : 'bg-[#16181b] border-[#2e3135] text-[#747878]'
                  }`}
                >
                  <span
                    className={`text-sm font-bold px-2 py-0.5 rounded-none ${
                      item.active ? 'bg-[#d4af37] text-black' : 'bg-[#2e3135] text-[#a0a5ab]'
                    }`}
                  >
                    {item.letter}
                  </span>
                  <div>
                    <h5 className={`text-xs font-bold uppercase tracking-wider ${item.active ? 'text-[#d4af37]' : 'text-white'}`}>
                      {item.title}
                    </h5>
                    <p className="text-[11px] font-sans text-[#a0a5ab] mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Summary */}
      <div className="p-6 bg-[#16181b] border-t border-[#2e3135] text-[11px] text-[#888c94] space-y-1 text-center">
        <p className="font-semibold text-white uppercase tracking-wider">
          CLOSERS PERSUASIVE UX MODULE
        </p>
        <p>Interactive Live Reference • Recognized Client: John Tan</p>
      </div>
    </aside>
  );
};
