import { useTranslation } from 'next-i18next';

const useSingleChoiceSorter = () => {
  const { t } = useTranslation();

  const sortByTransLabel = (items: Array<object>, direction = 'ASC') => {
    return items.sort((a: object, b: object) => {
      if (direction === 'DESC') {
        // eslint-disable-next-line
        return -1 * a['transLabel'].localeCompare(b['transLabel']);
      }
      // eslint-disable-next-line
      return a['transLabel'].localeCompare(b['transLabel']);
    });
  };

  const sortChoices = (options: Array<any>, sortOrder: string) => {
    if (sortOrder == null) return options;

    const filterCriteria = (opt) => {
      return opt.isPlaceHolder || opt.value === '0';
    };

    // add translabel to use localCompare
    // eslint-disable-next-line
    options = options.map((opt) => {
      return { ...opt, transLabel: t(opt.label) };
    });

    const unSortableItems = options.filter((opt) => filterCriteria(opt));
    const sortableItems = options.filter((opt) => !filterCriteria(opt));

    const sortedItems = sortByTransLabel(
      sortableItems,
      sortOrder.toUpperCase()
    );

    return unSortableItems.concat(sortedItems);
  };

  return { sortChoices };
};

export default useSingleChoiceSorter;
