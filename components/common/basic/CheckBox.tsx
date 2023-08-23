interface CheckBoxProps {
  className?: string;
  label?: string;
  labelClass?: string;
}
const CheckBox: React.FC<CheckBoxProps> = ({
  className,
  label,
  labelClass,
}) => {
  return (
    <>
      <div className={className}>
        <input className="check-input" type="checkbox" />
        <div className={labelClass}>{label}</div>
      </div>
    </>
  );
};

export default CheckBox;
