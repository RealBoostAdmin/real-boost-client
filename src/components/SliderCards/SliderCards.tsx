import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import Button from 'lib/Button';

const SliderCards: React.FC = ({children}) => {

  const [translations, setTranslations] = useState<number>(0);
  const [entities, setEntities] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  const onRight = () => {
    if (translations >= entities - 1) return;
    setTranslations(state => state + 1)
  };

  const onLeft = () => {
    if (translations <= 0) return;
    setTranslations(state => state - 1);
  };

  useEffect(() => {
    const initialize = () => {
      if (!ref.current) return;
      const cards = ref.current.children;
      setEntities(cards.length);
      if (!cards.length || cards.length < 2) return setDistance(0);

      const card0X = cards[0].getBoundingClientRect().x;
      const card1X = cards[1].getBoundingClientRect().x;
      setDistance(card1X - card0X);
    }
    initialize();
    window.addEventListener('resize', initialize);
    return () => window.removeEventListener('resize', initialize);
  }, []);

  return (
    <>
      <div ref={ref} className={`flex gap-6 transform -translate-x-[var(--trans)] transition-transform`} style={{'--trans': translations * distance + 'px'} as CSSProperties}>
        {children}
      </div>
      <div className='flex items-center justify-end gap-6 mt-6'>
        <Button variant='secondary' style='outlined' onClick={onLeft}>{'<-'}</Button>
        <Button variant='secondary' style='outlined' onClick={onRight}>{'->'}</Button>
      </div>
    </>
  );
};

export default SliderCards;