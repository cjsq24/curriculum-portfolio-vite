import { useEffect } from 'react';

type TProps = {
  totalDots: number;
  active: number;
  selectDot: (value: number) => void;
};

const Dots = ({ totalDots, active, selectDot }: TProps) => {
  const dotsToArray = (): number[] => {
    const dotArray: number[] = [];
    for (let i = 0; i <= totalDots; i++) {
      dotArray.push(i);
    }
    return dotArray;
  };

  useEffect(() => {
    const dotButton = document.querySelectorAll(
      '.dot'
    ) as NodeListOf<HTMLElement>;
    dotButton.forEach((ele) => {
      ele.addEventListener('click', dotSelection);
    });
    return () => {
      dotButton.forEach((ele) => {
        ele.removeEventListener('click', dotSelection);
      });
    };
  }, [active]);

  function dotSelection(e: Event) {
    const id = (e.target as HTMLElement).id.split('dot-')[1];
    selectDot(parseInt(id));
  }

  return (
    <div className="container-dots">
      <div className="content-dots">
        {dotsToArray().map((dot, idx) => (
          <div
            key={idx}
            id={`dot-${idx}`}
            className={`dot ${dot === active && 'active'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Dots;
