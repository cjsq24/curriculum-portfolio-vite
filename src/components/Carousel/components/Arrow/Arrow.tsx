export enum EDirection {
  left = 'left',
  right = 'right',
}

type TProps = {
  direction: EDirection;
};

const Arrow = ({ direction }: TProps) => {
  return (
    <div className={`arrow-container arrow-direction-${direction}`}>
      <div />
      <div />
    </div>
  );
};

export default Arrow;
