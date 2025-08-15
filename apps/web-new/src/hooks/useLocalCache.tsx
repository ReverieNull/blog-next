import { useState, useEffect ,useCallback} from 'react';

// 定义缓存数据类型
type CacheData = {
  theme: 'light' | 'dark' | 'eye';
  menuCollapsed?: boolean;
  lastVisitedPage?: string;
  fontSize?: number;
  customSettings?: Record<string, unknown>;
};

// 默认缓存数据
const DEFAULT_CACHE: CacheData = {
  theme: 'light',
  menuCollapsed: false,
  lastVisitedPage: '/',
  fontSize: 16,
  customSettings: {}
};

export const useLocalCache = () => {
  const [cache, setCache] = useState<CacheData>(DEFAULT_CACHE);
  const [isLoaded, setIsLoaded] = useState(false);

  // 从本地存储加载缓存
  useEffect(() => {
    try {
      const savedCache = localStorage.getItem('appCache');
      if (savedCache) {
        const parsedCache = JSON.parse(savedCache);
        
        // 合并默认值和保存的值
        const mergedCache = {
          ...DEFAULT_CACHE,
          ...parsedCache
        };
        
        setCache(mergedCache);
        
        // 应用主题
        if (mergedCache.theme) {
          document.body.setAttribute('data-theme', mergedCache.theme);
        }
      }
      setIsLoaded(true);
    } catch (error) {
      console.error('Failed to load cache:', error);
      setIsLoaded(true);
    }
  }, []);

  // 保存缓存到本地存储
  const saveCache = useCallback((newCache: Partial<CacheData>) => {
    try {
     const savedData = localStorage.getItem('appCache');
 const currentCache = savedData ? JSON.parse(savedData) : DEFAULT_CACHE;
      const updatedCache = {
        ...cache,
        ...newCache
      };
      if(JSON.stringify(currentCache) !== JSON.stringify(updatedCache)){
      setCache(updatedCache);
      localStorage.setItem('appCache', JSON.stringify(updatedCache));
      
      // 如果需要，立即应用主题变更
      if (newCache.theme) {
        document.body.setAttribute('data-theme', newCache.theme);
      }
    }
      return true;
    } catch (error) {
      console.error('Failed to save cache:', error);
      return false;
    }
  },[]);

  return {
    cache,
    saveCache,
    isLoaded
  };
};