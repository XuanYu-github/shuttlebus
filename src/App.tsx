import React, { useState, useMemo, useEffect } from 'react';
import { pinyin } from 'pinyin-pro';
import { shuttleData, Shuttle } from './data';
import { locationCoords } from './mapData';
import { drivingTimes } from './drivingData';
import { Bus, MapPin, Clock, Navigation, ArrowRightLeft, ArrowRight, ChevronDown, Search, Star, X, Trash2, Maximize2, Info, Sun, Moon, Monitor } from 'lucide-react';

const MultiSelect: React.FC<{ 
  options: string[];
  selected: string[];
  onChange: (val: string[]) => void;
  placeholder?: string;
  disabledOptions?: Set<string>;
  favorites?: string[];
  onToggleFavorite?: (option: string) => void;
  popupAlign?: 'left' | 'right';
}> = ({ 
  options, 
  selected, 
  onChange, 
  placeholder = '请选择', 
  disabledOptions, 
  favorites = [], 
  onToggleFavorite = (_opt: string) => {},
  popupAlign = 'left' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleOption = (opt: string) => {
    if (disabledOptions?.has(opt)) return;
    if (selected.includes(opt)) {
      onChange(selected.filter(item => item !== opt));
    } else {
      onChange([...selected, opt]);
    }
  };

  const groupedOptions = useMemo(() => {
    const visible = disabledOptions 
      ? options.filter(opt => !disabledOptions.has(opt))
      : options;
    const filtered = visible.filter(opt => opt.toLowerCase().includes(searchTerm.toLowerCase()));

    const groups: Record<string, string[]> = {
      '✓': [],
      '☆': [],
    };
    
    filtered.forEach(opt => {
      if (selected.includes(opt)) {
        groups['✓'].push(opt);
      } else if (favorites.includes(opt)) {
        groups['☆'].push(opt);
      } else {
        const py = pinyin(opt, { pattern: 'first', toneType: 'none', type: 'array' });
        const letter = py[0]?.[0]?.toUpperCase() || '#';
        const key = /[A-Z]/.test(letter) ? letter : '#';
        if (!groups[key]) groups[key] = [];
        groups[key].push(opt);
      }
    });

    Object.keys(groups).forEach(key => {
      groups[key].sort((a, b) => a.localeCompare(b, 'zh-CN'));
    });
    
    const sortedKeys = Object.keys(groups).filter(k => groups[k].length > 0).sort((a, b) => {
      if (a === '✓') return -1;
      if (b === '✓') return 1;
      if (a === '☆') return -1;
      if (b === '☆') return 1;
      if (a === '#') return 1;
      if (b === '#') return -1;
      return a.localeCompare(b);
    });

    return { groups, sortedKeys };
  }, [options, searchTerm, disabledOptions, favorites, selected]);

  const scrollToGroup = (key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const el = document.getElementById(`group-${key}`);
    const container = document.getElementById('options-container');
    if (el && container) {
      container.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div 
        className="w-full p-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm flex justify-between items-center cursor-pointer transition-colors"
        onPointerDown={(e) => {
          // Prevent the browser from moving focus instantly, which helps stop jumping
          e.preventDefault();
        }}
        onClick={(e) => {
          e.preventDefault();
          const target = e.currentTarget as HTMLElement;
          target.focus();
          setIsOpen(!isOpen);
        }}
      >
        <span className="truncate text-slate-700 dark:text-slate-200 select-none">
          {selected.length === 0 ? placeholder : selected.join(', ')}
        </span>
        <ChevronDown className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0 ml-2" />
      </div>
      
      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className={`absolute z-20 mt-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg flex flex-col overflow-hidden transition-all
            w-[280px] sm:w-[360px] max-h-80
            ${popupAlign === 'right' ? 'right-0 origin-top-right sm:-right-4' : 'left-0 origin-top-left sm:-left-4'}
          `}>
            <div className="p-2 border-b border-slate-100 dark:border-slate-800">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-2.5 top-2.5" />
                <input
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-100 transition-colors"
                  placeholder="搜索地点..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
            <div id="options-container" className="overflow-y-auto p-1 flex relative">
              <div className="flex-1 min-w-0 pr-1">
                {groupedOptions.sortedKeys.length > 0 ? groupedOptions.sortedKeys.map(key => (
                  <div key={key} id={`group-${key}`}>
                    <div className="px-3 py-1 text-[11px] font-bold text-slate-400 bg-slate-50 dark:bg-slate-800/80 sticky top-0 z-10 backdrop-blur-sm -mx-1 mb-1">
                      {key === '☆' ? '已收藏' : key === '✓' ? '已选择' : key}
                    </div>
                    {groupedOptions.groups[key].map(opt => (
                      <div 
                        key={opt} 
                        className="flex items-center px-3 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer rounded-lg transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleOption(opt);
                        }}
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite(opt);
                          }}
                          className="mr-2 shrink-0 focus:outline-none"
                        >
                          <Star className={`w-4 h-4 ${favorites.includes(opt) ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-700 hover:text-amber-400'}`} />
                        </button>
                        <div className={`w-4 h-4 rounded border flex items-center justify-center mr-2 shrink-0 ${selected.includes(opt) ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300 dark:border-slate-700'}`}>
                          {selected.includes(opt) && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                        </div>
                        <span className="text-sm text-slate-700 dark:text-slate-300 select-none">{opt}</span>
                      </div>
                    ))}
                  </div>
                )) : (
                  <div className="p-3 text-sm text-slate-500 dark:text-slate-500 text-center">无匹配地点</div>
                )}
              </div>
              
              {/* A-Z Sidebar Index */}
              {groupedOptions.sortedKeys.length > 0 && (
                <div className="w-5 shrink-0 flex flex-col items-center justify-start sticky top-0 py-1 gap-0.5 z-20 overflow-y-auto max-h-[calc(20rem-3rem)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  {groupedOptions.sortedKeys.map(key => (
                    <button 
                      key={key} 
                      type="button"
                      onPointerDown={(e) => e.preventDefault()}
                      onClick={(e) => scrollToGroup(key, e)}
                      className="w-4 h-4 flex items-center justify-center text-[10px] font-bold text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 rounded hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0"
                    >
                      {key === '☆' ? <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> : key}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const addMinutes = (timeStr: string, baseMinutes: number, stopCount: number = 0) => {
  if (!timeStr || isNaN(baseMinutes) || timeStr.includes('返回')) return null;
  
  // 班车调整：1.25倍轿车耗时 + 每站1分钟停靠时间
  const adjustedMinutes = Math.round(baseMinutes * 1.25 + stopCount * 1.0);
  
  const parts = timeStr.split(':');
  if (parts.length !== 2) return null;
  const [hours, mins] = parts.map(Number);
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(mins + adjustedMinutes);
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
};

const ShuttleCard: React.FC<{ 
  shuttle: Shuttle; 
  onShowMap: (s: Shuttle, station?: string) => void;
  showEstimatedTime: boolean;
  highlightStops?: string[];
}> = ({ shuttle, onShowMap, showEstimatedTime, highlightStops = [] }) => {
  const allStops = useMemo(() => {
    // Build full stop list: departure + intermediate + arrival, deduplicating by name
    const seen = new Set<string>();
    const full: string[] = [];
    const add = (s: string) => { if (!seen.has(s)) { seen.add(s); full.push(s); } };
    add(shuttle.departureLocation);
    (shuttle.stops || []).forEach(add);
    add(shuttle.arrivalLocation);
    return full;
  }, [shuttle]);

  const renderStationName = (name: string, isRight: boolean = false) => {
    const parts = name.split('(');
    if (parts.length === 1) return <span className="break-all">{name}</span>;
    
    return (
      <span className={`inline-flex flex-wrap ${isRight ? 'justify-end' : 'justify-start'}`}>
        <span className="break-all">{parts[0]}</span>
        <span className="whitespace-nowrap text-slate-500 font-normal">({parts[1]}</span>
      </span>
    );
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-4 sm:p-5 hover:shadow-md dark:hover:shadow-indigo-500/5 transition-all group overflow-hidden relative">
      <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Top row: bus icon + name + plate */}
      <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-50 dark:border-slate-800">
        <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
          <Bus className="w-4 h-4" />
        </div>
        <div className="text-sm font-bold text-slate-800 dark:text-slate-100">{shuttle.busName}</div>
        {shuttle.plateNumber && (
          <div className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded font-mono">
            {shuttle.plateNumber}
          </div>
        )}
        <button 
          onClick={() => onShowMap(shuttle)}
          className="ml-auto p-1.5 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors shrink-0"
          title="在内部地图中查看路线"
        >
          <Navigation className="w-4 h-4" />
        </button>
      </div>

      {/* Main route info */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex flex-col gap-1 min-w-0 flex-1">
          <button 
            onClick={() => onShowMap(shuttle, shuttle.departureLocation)}
            className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-snug text-left hover:text-indigo-600 transition-colors"
          >
            {renderStationName(shuttle.departureLocation)}
          </button>
          <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400 tabular-nums">{shuttle.departureTime}</div>
        </div>

        <div className="flex flex-col items-center justify-center pt-1 shrink-0 gap-1">
          <svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8h28" stroke="#93b4f5" strokeWidth="2" strokeLinecap="round" />
            <path d="M26 3l5 5-5 5" stroke="#5ba3f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {(shuttle.stops && shuttle.stops.length > 0) && (
            <button
              onClick={() => onShowMap(shuttle)}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap"
              style={{color: '#5ba3f5', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe'}}
            >
              途经{allStops.length}站
            </button>
          )}
        </div>

        <div className="flex flex-col gap-1 min-w-0 flex-1 text-right items-end">
          <button 
            onClick={() => onShowMap(shuttle, shuttle.arrivalLocation)}
            className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-snug text-right hover:text-indigo-600 transition-colors"
          >
            {renderStationName(shuttle.arrivalLocation, true)}
          </button>
          {showEstimatedTime ? (
            (() => {
              const info = drivingTimes[`${shuttle.departureLocation}→${shuttle.arrivalLocation}`];
              const arrivalTime = info ? addMinutes(shuttle.departureTime, info.durationMin, shuttle.stops?.length || 0) : null;
              return arrivalTime ? (
                <div className="text-indigo-600 dark:text-indigo-400 font-bold text-lg tabular-nums leading-none mt-0.5">{arrivalTime}</div>
              ) : (
                <div className="text-xs text-slate-400 font-medium">预计抵达</div>
              );
            })()
          ) : (
            <div className="h-7" />
          )}
        </div>
      </div>

          {allStops.length > 2 && (
            <div className="relative pl-2 pt-2 pb-1">
              <div className="absolute left-[7px] top-4 bottom-4 w-0.5 bg-slate-100 dark:bg-slate-800 ml-[1px]" />
              <div className="space-y-3">
                {allStops.map((stop, idx) => {
                  const isStart = idx === 0;
                  const isEnd = idx === allStops.length - 1;
                  const isHighlighted = highlightStops.includes(stop) && !isStart && !isEnd;
                  
                  return (
                    <div key={idx} className="flex items-center gap-3 relative">
                      <div className={`w-2.5 h-2.5 rounded-full z-10 shrink-0 border-2 border-white dark:border-slate-900 ${
                        isHighlighted ? 'bg-emerald-500' :
                        isStart ? 'bg-indigo-600' :
                        isEnd ? 'bg-amber-500' :
                        'bg-slate-300 dark:bg-slate-700'
                      }`} />
                      <button 
                        onClick={() => onShowMap(shuttle, stop)}
                        className={`text-xs text-left hover:text-indigo-600 transition-colors ${
                          isHighlighted ? 'font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/40 px-2 py-0.5 rounded-md -ml-2' :
                          isStart || isEnd ? 'font-bold text-slate-700 dark:text-slate-200' : 'text-slate-500 dark:text-slate-500'
                        }`}
                      >
                        {stop}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
      {shuttle.note && (
        <div className="mt-4 pt-3 border-t border-slate-50 dark:border-slate-850">
          <div className="flex items-start gap-2 bg-indigo-50/50 dark:bg-indigo-900/10 p-2.5 rounded-xl border border-indigo-100/30 dark:border-indigo-500/10">
            <div className="text-indigo-400 dark:text-indigo-500 shrink-0 mt-0.5">
              <Info className="w-3.5 h-3.5" />
            </div>
            <p className="text-[11px] leading-relaxed text-indigo-700/80 dark:text-indigo-400 font-medium">
              {shuttle.note}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

type FavoriteRoute = {
  id: string;
  name: string;
  departure: string[];
  arrival: string[];
  outboundTime: string;
  returnTime: string;
};

const categoryOrder = [
  '市内班车（周一至周五）',
  '科学家园班车（周一至周五）',
  '聚贤苑—聚变堆园区（北门）班车（周一至周五）',
  '高研院班车（周一至周五）',
  '博士生班车（科大东区，周一至周五）',
  '博士生班车（科大高新校区，周一至周五）',
  '研究生班车（工研院）',
  '附属学校班车（周一至周五）',
  '三十岗公寓班车（周一至周五）',
  '三十岗公寓班车（周六）',
  '三十岗公寓班车（周日）',
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'plan'>('all');
  const [selectedShuttle, setSelectedShuttle] = useState<Shuttle | null>(null);
  const [initialStation, setInitialStation] = useState<string | undefined>();
  const [showEstimatedTime, setShowEstimatedTime] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(() => 
    (localStorage.getItem('theme') as any) || 'system'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Plan state
  const [planDeparture, setPlanDeparture] = useState<string[]>([]);
  const [planArrival, setPlanArrival] = useState<string[]>([]);
  const [planOutboundTime, setPlanOutboundTime] = useState('05:00');
  const [planReturnTime, setPlanReturnTime] = useState('05:00');

  // Favorites state
  const [favorites, setFavorites] = useState<FavoriteRoute[]>([]);
  const [favoriteLocations, setFavoriteLocations] = useState<string[]>([]);

  useEffect(() => {
    const savedRoutes = localStorage.getItem('shuttle_favorites');
    if (savedRoutes) {
      try {
        setFavorites(JSON.parse(savedRoutes));
      } catch (e) {}
    }
    const savedLocations = localStorage.getItem('shuttle_favorite_locations');
    if (savedLocations) {
      try {
        setFavoriteLocations(JSON.parse(savedLocations));
      } catch (e) {}
    }
  }, []);

  const toggleFavoriteLocation = (location: string) => {
    let updated;
    if (favoriteLocations.includes(location)) {
      updated = favoriteLocations.filter(l => l !== location);
    } else {
      updated = [...favoriteLocations, location];
    }
    setFavoriteLocations(updated);
    localStorage.setItem('shuttle_favorite_locations', JSON.stringify(updated));
  };

  const saveFavorite = () => {
    if (planDeparture.length === 0 || planArrival.length === 0) {
      alert('请先选择出发地和目的地');
      return;
    }
    const name = prompt('请输入收藏路线名称：', `${planDeparture[0]} ⇄ ${planArrival[0]}`);
    if (!name) return;

    const newFav: FavoriteRoute = {
      id: Date.now().toString(),
      name,
      departure: planDeparture,
      arrival: planArrival,
      outboundTime: planOutboundTime,
      returnTime: planReturnTime
    };

    const updated = [...favorites, newFav];
    setFavorites(updated);
    localStorage.setItem('shuttle_favorites', JSON.stringify(updated));
  };

  const removeFavorite = (id: string) => {
    const updated = favorites.filter(f => f.id !== id);
    setFavorites(updated);
    localStorage.setItem('shuttle_favorites', JSON.stringify(updated));
  };

  const applyFavorite = (fav: FavoriteRoute) => {
    setPlanDeparture(fav.departure);
    setPlanArrival(fav.arrival);
    setPlanOutboundTime(fav.outboundTime);
    setPlanReturnTime(fav.returnTime);
  };

  const uniqueLocations = useMemo(() => {
    const locations = new Set<string>();
    shuttleData.forEach(s => {
      locations.add(s.departureLocation);
      locations.add(s.arrivalLocation);
      (s.stops || []).forEach(stop => locations.add(stop));
    });
    return Array.from(locations).sort((a, b) => a.localeCompare(b, 'zh-CN'));
  }, []);

  // Smart filtering: compute which arrivals are reachable given selected departures
  const unreachableArrivals = useMemo(() => {
    if (planDeparture.length === 0) return undefined; // no filtering when nothing selected
    const reachable = new Set<string>();
    shuttleData.forEach(s => {
      if (planDeparture.includes(s.departureLocation)) {
        reachable.add(s.arrivalLocation);
        // Also add stops as potential destinations
        (s.stops || []).forEach(stop => reachable.add(stop));
      }
      // Also consider routes where departure is a stop
      if ((s.stops || []).some(stop => planDeparture.includes(stop))) {
        reachable.add(s.arrivalLocation);
        reachable.add(s.departureLocation);
        (s.stops || []).forEach(stop => reachable.add(stop));
      }
    });
    // Remove departure locations themselves from reachable to avoid selecting same place
    planDeparture.forEach(d => reachable.delete(d));
    // Return set of unreachable locations
    const unreachable = new Set<string>();
    uniqueLocations.forEach(loc => {
      if (!reachable.has(loc)) unreachable.add(loc);
    });
    return unreachable;
  }, [planDeparture, uniqueLocations]);

  // Smart filtering: compute which departures are reachable given selected arrivals
  const unreachableDepartures = useMemo(() => {
    if (planArrival.length === 0) return undefined; // no filtering when nothing selected
    const reachable = new Set<string>();
    shuttleData.forEach(s => {
      if (planArrival.includes(s.arrivalLocation)) {
        reachable.add(s.departureLocation);
        (s.stops || []).forEach(stop => reachable.add(stop));
      }
      if ((s.stops || []).some(stop => planArrival.includes(stop))) {
        reachable.add(s.departureLocation);
        reachable.add(s.arrivalLocation);
        (s.stops || []).forEach(stop => reachable.add(stop));
      }
    });
    planArrival.forEach(a => reachable.delete(a));
    const unreachable = new Set<string>();
    uniqueLocations.forEach(loc => {
      if (!reachable.has(loc)) unreachable.add(loc);
    });
    return unreachable;
  }, [planArrival, uniqueLocations]);

  const groupedData = useMemo<Record<string, Shuttle[]>>(() => {
    const groups: Record<string, Shuttle[]> = {};
    shuttleData.forEach(s => {
      if (!groups[s.category]) groups[s.category] = [];
      groups[s.category].push(s);
    });
    return groups;
  }, []);

  const orderedGroupedData = useMemo<[string, Shuttle[]][]>(() => {
    const groupedEntries = Object.entries(groupedData) as [string, Shuttle[]][];
    const ordered = categoryOrder
      .filter(category => groupedData[category])
      .map(category => [category, groupedData[category]] as [string, Shuttle[]]);
    const extras = groupedEntries.filter(([category]) => !categoryOrder.includes(category));
    return [...ordered, ...extras];
  }, [groupedData]);

  const planResults = useMemo(() => {
    if (planDeparture.length === 0 || planArrival.length === 0) return null;

    // A helper to get the array of all stops in order for a shuttle
    const getOrderedStops = (s: Shuttle) => [s.departureLocation, ...(s.stops || []), s.arrivalLocation];

    const dedupeShuttles = (items: Shuttle[]) => {
      const seen = new Set<string>();
      return items.filter((s) => {
        const signature = [
          s.busName,
          s.plateNumber,
          s.departureTime,
          s.departureLocation,
          s.arrivalLocation,
          (s.stops || []).join('>'),
          s.note || '',
        ].join('|');
        if (seen.has(signature)) return false;
        seen.add(signature);
        return true;
      });
    };

    // Outbound logic: departure must appear BEFORE arrival in the ordered stops
    const isOutbound = (s: Shuttle) => {
      const ordered = getOrderedStops(s);
      for (const dep of planDeparture) {
        for (const arr of planArrival) {
          const depIdx = ordered.indexOf(dep);
          const arrIdx = ordered.indexOf(arr);
          if (depIdx !== -1 && arrIdx !== -1 && depIdx < arrIdx) {
            return true;
          }
        }
      }
      return false;
    };

    // Return logic: arrival must appear BEFORE departure in the ordered stops
    const isReturn = (s: Shuttle) => {
      const ordered = getOrderedStops(s);
      for (const dep of planDeparture) {
        for (const arr of planArrival) {
          const depIdx = ordered.indexOf(dep);
          const arrIdx = ordered.indexOf(arr);
          if (depIdx !== -1 && arrIdx !== -1 && arrIdx < depIdx) {
            return true;
          }
        }
      }
      return false;
    };

    const outbound = dedupeShuttles(
      shuttleData.filter(s => 
        isOutbound(s) &&
        (s.departureTime.startsWith('即刻返回') || s.departureTime >= planOutboundTime)
      )
    ).sort((a, b) => a.departureTime.localeCompare(b.departureTime));

    const returnTrips = dedupeShuttles(
      shuttleData.filter(s => 
        isReturn(s) &&
        (s.departureTime.startsWith('即刻返回') || s.departureTime >= planReturnTime)
      )
    ).sort((a, b) => a.departureTime.localeCompare(b.departureTime));

    return { outbound, returnTrips };
  }, [planDeparture, planArrival, planOutboundTime, planReturnTime]);

  const handleShowMap = (shuttle: Shuttle, station?: string) => {
    setSelectedShuttle(shuttle);
    setInitialStation(station);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans pb-20 transition-colors">
      {/* Header */}
      <div className="bg-indigo-600 text-white p-6 rounded-b-3xl shadow-md">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Bus className="w-6 h-6" />
            科学岛班车表
          </h1>
          <div className="flex items-center bg-indigo-700/50 p-1 rounded-xl border border-white/10">
            {[
              { id: 'light', icon: Sun },
              { id: 'system', icon: Monitor },
              { id: 'dark', icon: Moon }
            ].map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setTheme(id as any)}
                className={`p-1.5 rounded-lg transition-all ${theme === id ? 'bg-white text-indigo-600 shadow-sm' : 'text-indigo-200 hover:text-white'}`}
                title={id === 'system' ? '跟随系统' : id === 'dark' ? '深色模式' : '浅色模式'}
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1.5 mt-2 opacity-80">
          <p className="text-indigo-100 text-sm whitespace-pre-wrap">
            （如遇特殊情况，请以车辆指示牌为准）
          </p>
          <div className="flex items-start gap-1.5 text-[10px] text-indigo-200 leading-normal">
            <Info className="w-3 h-3 shrink-0 mt-0.5" />
            <p>
              本网页非官方，由个人维护，信息仅供参考。
              官方信息请通过微信公众号 <span className="text-white font-semibold">“科学岛服务”</span> 的 <span className="text-white font-semibold">“班车查询”</span> 界面确认。
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-indigo-500/30 flex flex-col gap-3">
          <label className="flex items-center gap-3 cursor-pointer group w-fit">
            <div className={`w-10 h-5 rounded-full relative transition-colors ${showEstimatedTime ? 'bg-emerald-500' : 'bg-indigo-400'}`}>
              <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${showEstimatedTime ? 'left-6' : 'left-1'}`} />
            </div>
            <input 
              type="checkbox" 
              className="hidden" 
              checked={showEstimatedTime}
              onChange={(e) => setShowEstimatedTime(e.target.checked)}
            />
            <span className="text-sm font-medium text-white group-hover:text-emerald-50 transition-colors">显示预计到达时间</span>
          </label>
          {showEstimatedTime && (
            <div className="flex items-start gap-2 bg-indigo-700/40 p-2.5 rounded-xl border border-indigo-400/20">
              <div className="text-amber-300 shrink-0 mt-0.5 mt-0.5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
              </div>
              <p className="text-[11px] leading-relaxed text-indigo-100/90">
                <span className="font-bold text-amber-200">免责声明：</span>预计到达时间是通过百度地图API根据路况自动计算得出，班车受多种因素影响，计算结果仅供参考，请提前到站候车。
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex p-4 gap-2 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            activeTab === 'all' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          全部班车
        </button>
        <button
          onClick={() => setActiveTab('plan')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1 ${
            activeTab === 'plan' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
          }`}
        >
          <Navigation className="w-4 h-4" />
          行程规划
        </button>
      </div>

      {/* Content */}
      <div className="px-4">
        {activeTab === 'all' && (
          <div className="space-y-6">
            {orderedGroupedData.map(([category, shuttles]) => (
              <div key={category}>
                <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3 pl-1 border-l-4 border-indigo-500 transition-colors">{category}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {shuttles.map((shuttle, idx) => (
                    <ShuttleCard key={idx} shuttle={shuttle} onShowMap={handleShowMap} showEstimatedTime={showEstimatedTime} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'plan' && (
          <div className="space-y-4">
            {favorites.length > 0 && (
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                {favorites.map(fav => (
                  <div key={fav.id} className="flex items-center bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-500/10 rounded-full px-3 py-1.5 shrink-0 transition-colors">
                    <button 
                      onClick={() => applyFavorite(fav)}
                      className="text-xs font-medium text-amber-700 dark:text-amber-400 flex items-center gap-1 hover:text-amber-800 dark:hover:text-amber-300 transition-colors"
                    >
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      {fav.name}
                    </button>
                    <button 
                      onClick={() => removeFavorite(fav.id)}
                      className="ml-2 text-amber-400 hover:text-amber-600 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-4 transition-colors">
              <div className="flex items-center gap-2">
                <div className="flex-1 min-w-0">
                  <label className="block text-xs font-medium text-slate-500 mb-1">出发地 (可多选)</label>
                  <MultiSelect
                    options={uniqueLocations}
                    selected={planDeparture}
                    onChange={setPlanDeparture}
                    placeholder="请选择出发地"
                    favorites={favoriteLocations}
                    onToggleFavorite={toggleFavoriteLocation}
                    disabledOptions={unreachableDepartures}
                    popupAlign="left"
                  />
                </div>
                <div className="pt-5 shrink-0">
                  <button 
                    onClick={() => {
                      const tempDep = planDeparture;
                      setPlanDeparture(planArrival);
                      setPlanArrival(tempDep);
                    }}
                    className="p-2 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                    title="互换出发地和目的地"
                  >
                    <ArrowRightLeft className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block text-xs font-medium text-slate-500 mb-1">目的地 (可多选)</label>
                  <MultiSelect
                    options={uniqueLocations}
                    selected={planArrival}
                    onChange={setPlanArrival}
                    placeholder="请选择目的地"
                    favorites={favoriteLocations}
                    onToggleFavorite={toggleFavoriteLocation}
                    disabledOptions={unreachableArrivals}
                    popupAlign="right"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-xs font-medium text-slate-500 mb-1">去程时间 (最早)</label>
                  <input
                    type="time"
                    value={planOutboundTime}
                    onChange={(e) => setPlanOutboundTime(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-100 transition-colors"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-medium text-slate-500 mb-1">返程时间 (最早)</label>
                  <input
                    type="time"
                    value={planReturnTime}
                    onChange={(e) => setPlanReturnTime(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-100 transition-colors"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-2">
                <button 
                  onClick={saveFavorite}
                  className="flex-1 py-2.5 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center justify-center gap-1 transition-colors"
                >
                  <Star className="w-4 h-4" />
                  收藏当前路线
                </button>
                <button 
                  onClick={() => { setPlanDeparture([]); setPlanArrival([]); }}
                  className="flex-1 py-2.5 bg-slate-50 dark:bg-slate-800 text-rose-500 dark:text-rose-400 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium hover:bg-rose-50 dark:hover:bg-rose-950/30 flex items-center justify-center gap-1 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  清除当前选择
                </button>
              </div>
            </div>

            {planResults && (
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs">去</span>
                    推荐去程班车
                  </h3>
                  {planResults.outbound.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {planResults.outbound.map((shuttle, idx) => (
                        <ShuttleCard key={idx} shuttle={shuttle} onShowMap={handleShowMap} showEstimatedTime={showEstimatedTime} highlightStops={[...planDeparture, ...planArrival]} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-sm text-slate-500 dark:text-slate-400 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 text-center transition-colors">
                      没有找到合适的去程班车
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs">返</span>
                    推荐返程班车
                  </h3>
                  {planResults.returnTrips.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {planResults.returnTrips.map((shuttle, idx) => (
                        <ShuttleCard key={idx} shuttle={shuttle} onShowMap={handleShowMap} showEstimatedTime={showEstimatedTime} highlightStops={[...planDeparture, ...planArrival]} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-sm text-slate-500 dark:text-slate-400 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 text-center transition-colors">
                      没有找到合适的返程班车
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {selectedShuttle && (
        <MapModal 
          shuttle={selectedShuttle} 
          initialStation={initialStation}
          onClose={() => {
            setSelectedShuttle(null);
            setInitialStation(undefined);
          }} 
        />
      )}
    </div>
  );
}

const MapModal: React.FC<{ 
  shuttle: Shuttle; 
  initialStation?: string;
  onClose: () => void 
}> = ({ shuttle, initialStation, onClose }) => {
  const mapContainerRef = React.useRef<HTMLDivElement>(null);
  const mapRef = React.useRef<any>(null);
  const mapPointsRef = React.useRef<Record<string, any>>({});
  const [selectedStation, setSelectedStation] = useState<string | null>(initialStation || null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Wait a bit for modal transition if any
    const timer = setTimeout(() => {
      if (!mapContainerRef.current || !(window as any).BMap) return;

      const BMap = (window as any).BMap;

      const allStops = [shuttle.departureLocation, ...(shuttle.stops || []), shuttle.arrivalLocation];
      // Note: mapData has [lat, lng], BMap.Point requires (lng, lat)
      const pointsMap: Record<string, any> = {};
      allStops.forEach(stop => {
        const coords = locationCoords[stop];
        if (coords) pointsMap[stop] = new BMap.Point(coords[1], coords[0]);
      });
      mapPointsRef.current = pointsMap;
      const points: any[] = allStops.map(s => pointsMap[s]).filter(Boolean);

      if (points.length === 0) return;

      const isDark = document.documentElement.classList.contains('dark');
      const map = new BMap.Map(mapContainerRef.current);
      mapRef.current = map;
      
      if (isDark) {
        map.setMapStyle({style: 'midnight'});
      }
      
      const center = points[0];
      map.centerAndZoom(center, 13);
      // NOTE: We do NOT call map.enableScrollWheelZoom() or
      // map.enablePinchToZoom() because Baidu Map's built-in
      // implementations miscalculate finger/cursor positions when the
      // map container lives inside a CSS flex-centered modal with
      // padding.  Instead we implement both interactions manually so
      // that zoom always targets the correct screen position.

      const container = mapContainerRef.current!;

      // ── Desktop: mouse-wheel zoom ──────────────────────────────
      const wheelHandler = (e: WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const currentZoom = map.getZoom();
        const delta = e.deltaY > 0 ? -1 : 1;
        const newZoom = Math.max(3, Math.min(19, currentZoom + delta));
        if (newZoom === currentZoom) return;

        const rect = container.getBoundingClientRect();
        const pixel = new BMap.Pixel(
          e.clientX - rect.left,
          e.clientY - rect.top
        );
        map.centerAndZoom(map.pixelToPoint(pixel), newZoom);
      };
      container.addEventListener('wheel', wheelHandler, { passive: false });

      // ── Mobile: pinch-to-zoom ──────────────────────────────────
      let lastPinchDist = 0;
      let lastPinchZoom = 0;
      let pinchMidPoint: any = null; // BMap.Point

      const getMidPixel = (t1: Touch, t2: Touch) => {
        const rect = container.getBoundingClientRect();
        return new BMap.Pixel(
          (t1.clientX + t2.clientX) / 2 - rect.left,
          (t1.clientY + t2.clientY) / 2 - rect.top
        );
      };
      const getDist = (t1: Touch, t2: Touch) =>
        Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);

      const touchStartHandler = (e: TouchEvent) => {
        if (e.touches.length === 2) {
          e.preventDefault();
          lastPinchDist = getDist(e.touches[0], e.touches[1]);
          lastPinchZoom = map.getZoom();
          pinchMidPoint = map.pixelToPoint(
            getMidPixel(e.touches[0], e.touches[1])
          );
        }
      };
      const touchMoveHandler = (e: TouchEvent) => {
        if (e.touches.length === 2 && lastPinchDist > 0) {
          e.preventDefault();
          const curDist = getDist(e.touches[0], e.touches[1]);
          // Ignore tiny movements to avoid jittery zoom
          if (Math.abs(curDist - lastPinchDist) < 8) return;
          const ratio = curDist / lastPinchDist;
          // Lower multiplier = smoother, less aggressive zoom
          const zoomDelta = Math.log2(ratio) * 0.8;
          const newZoom = Math.round(
            Math.max(3, Math.min(19, lastPinchZoom + zoomDelta))
          );
          if (newZoom !== map.getZoom() && pinchMidPoint) {
            map.centerAndZoom(pinchMidPoint, newZoom);
          }
        }
      };
      const touchEndHandler = () => {
        lastPinchDist = 0;
        pinchMidPoint = null;
      };

      container.addEventListener('touchstart', touchStartHandler, { passive: false });
      container.addEventListener('touchmove', touchMoveHandler, { passive: false });
      container.addEventListener('touchend', touchEndHandler);

      // Store references for cleanup
      (container as any).__wheelHandler = wheelHandler;
      (container as any).__touchStartHandler = touchStartHandler;
      (container as any).__touchMoveHandler = touchMoveHandler;
      (container as any).__touchEndHandler = touchEndHandler;

      // Add markers
      points.forEach((point, idx) => {
        const stopName = allStops[idx];
        const isStart = idx === 0;
        const isEnd = idx === points.length - 1;
        
        // Simple marker
        const marker = new BMap.Marker(point);
        map.addOverlay(marker);
        
        let color = '#94a3b8';
        if (isStart) color = '#4f46e5';
        else if (isEnd) color = '#f59e0b';

        // Add label
        const labelContent = `<b>${stopName}</b>${isStart ? ' (起点)' : isEnd ? ' (终点)' : ''}`;
        const label = new BMap.Label(labelContent, { 
          position: point,
          offset: new BMap.Size(10, -25) 
        });
        
        label.setStyle({
          color: color,
          fontSize: "12px",
          border: `1px solid ${color}`,
          borderRadius: "4px",
          padding: "2px 5px",
          backgroundColor: isDark ? "#1e293b" : "#fff",
          boxShadow: isDark ? "0 4px 6px -1px rgba(0, 0, 0, 0.3)" : "0 2px 4px rgba(0,0,0,0.1)"
        });
        
        marker.setLabel(label);
      });

      // Draw path
      if (points.length > 1) {
        const polyline = new BMap.Polyline(points, { 
          strokeColor: '#4f46e5', 
          strokeWeight: 4, 
          strokeOpacity: 0.6, 
          strokeStyle: 'dashed' 
        });
        map.addOverlay(polyline);
        
        if (initialStation && pointsMap[initialStation]) {
          map.centerAndZoom(pointsMap[initialStation], 16);
        } else {
          map.setViewport(points, { margins: [50, 50, 50, 50] });
        }
      }
    }, 150);

    return () => {
      clearTimeout(timer);
      // Clean up custom wheel + touch handlers
      if (mapContainerRef.current) {
        const c = mapContainerRef.current as any;
        if (c.__wheelHandler) {
          c.removeEventListener('wheel', c.__wheelHandler);
          delete c.__wheelHandler;
        }
        if (c.__touchStartHandler) {
          c.removeEventListener('touchstart', c.__touchStartHandler);
          delete c.__touchStartHandler;
        }
        if (c.__touchMoveHandler) {
          c.removeEventListener('touchmove', c.__touchMoveHandler);
          delete c.__touchMoveHandler;
        }
        if (c.__touchEndHandler) {
          c.removeEventListener('touchend', c.__touchEndHandler);
          delete c.__touchEndHandler;
        }
      }
      if (mapRef.current) {
        mapRef.current.clearOverlays();
        mapRef.current = null;
      }
    };
  }, [shuttle]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl h-[80vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col transition-colors border dark:border-slate-800">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Bus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-slate-100">{shuttle.busName} - 路线地图</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{shuttle.departureLocation} → {shuttle.arrivalLocation}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-1 relative bg-slate-100 dark:bg-slate-950">
          <div ref={mapContainerRef} className="absolute inset-0 z-10" />
          
          {/* Overlay info if coordinates are missing */}
          {!locationCoords[shuttle.departureLocation] && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-50/80 dark:bg-slate-900/80">
              <div className="text-center p-6 max-w-xs transition-all">
                <div className="w-16 h-16 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                  <MapPin className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-2">暂无位置信息</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">抱歉，我们目前还没有此路线上站点的精确地图位置信息。</p>
              </div>
            </div>
          )}
        </div>

        <div className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap mr-1">途径站点：</span>
            {(() => {
              const seen = new Set<string>();
              const fullStops: string[] = [];
              const add = (s: string) => { if (!seen.has(s)) { seen.add(s); fullStops.push(s); } };
              add(shuttle.departureLocation);
              (shuttle.stops || []).forEach(add);
              add(shuttle.arrivalLocation);
              return fullStops;
            })().map((stop, i, arr) => {
              const hasCoords = !!locationCoords[stop];
              const isStart = i === 0;
              const isEnd = i === arr.length - 1;
              return (
                <React.Fragment key={i}>
                  <button
                    onClick={() => {
                      const pt = mapPointsRef.current[stop];
                      if (pt && mapRef.current) {
                        mapRef.current.centerAndZoom(pt, 16);
                      }
                      setSelectedStation(stop);
                    }}
                    className={`text-sm whitespace-nowrap px-2 py-0.5 rounded-full transition-colors ${
                      selectedStation === stop && !isStart && !isEnd ? 'font-bold bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-300 dark:ring-emerald-700' :
                      isStart ? 'font-bold bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-900/60' :
                      isEnd ? 'font-bold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/60' :
                      hasCoords ? 'font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800' :
                      'font-medium text-slate-400 dark:text-slate-600 cursor-default'
                    }`}
                    title={hasCoords ? `跳转到${stop}` : '暂无坐标'}
                    disabled={!hasCoords}
                  >
                    {stop}
                  </button>
                  {i < arr.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-slate-300 shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
