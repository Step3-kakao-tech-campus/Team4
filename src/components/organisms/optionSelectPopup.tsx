import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import RadioOption from '../molecules/radioOption';
import { Option } from '../../types/option';

interface OptionListProps {
  options: Option[];
  optionGroup: string;
  currentValue: string;
  onOptionSelect: React.FormEventHandler<HTMLFormElement>;
}

const OptionSelectPopup = forwardRef<HTMLDialogElement, OptionListProps>(({
  options,
  optionGroup,
  currentValue,
  onOptionSelect,
}, ref) => {
  const { t } = useTranslation();

  return (
    <dialog
      ref={ref}
      className="fixed mb-0 h-[50vh] w-full max-w-[500px] rounded-t-2xl
      backdrop:bg-matgpt-gray/50"
    >
      <form onSubmit={onOptionSelect}>
        <section>
          <h1 className="py-2">{t('landingPage.languageSelect')}</h1>
          <ul className="h-[calc(50vh-6rem-1px)] overflow-y-auto overscroll-contain px-4">
            {options.map(({ name, value }) => (
              <li key={value}>
                <RadioOption
                  labelName={name}
                  optionGroup={optionGroup}
                  id={value}
                  value={value}
                  defaultChecked={value === currentValue}
                />
              </li>
            ))}
          </ul>
        </section>
        <button
          type="submit"
          className="w-full max-w-[500px] border-t border-t-matgpt-gray/50 bg-white py-4"
        >
          {t('landingPage.save')}
        </button>
      </form>
    </dialog>
  );
});

export default OptionSelectPopup;
