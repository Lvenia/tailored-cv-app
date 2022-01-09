/**
 * Temporary solution for getting id, suitable in dev mode, when there is only one user handled
 * @returns {string}
 */
export const generateId = () => {
  return new Date().getTime().toString(); //temporary solution
};
//TODO: find better way to generate id

/**
 * Singular resume entry
 * @typedef {startDate: string, endDate: string,header: string, subheader: string, bulletPoints: Array<Item>} AdvancedItem
 */
/**
 * Singular resume entry
 * @typedef {{item:{id: string, value: [string|AdvancedItem]}, isSelected: boolean}} Item
 */

/**
 * Returns the value of the first selected resume entry. If no entry is selected, returns null.
 * @param {Array<Item>} entries
 * @returns {string|null}
 */
export const getSingleSelectedValue = (entries) => {
  const selectedItem = entries.find(entry => entry.isSelected);
  return selectedItem?.item?.value || null;
};

/**
 * Returns array of all selected resume entry. If no entry is selected, returns null.
 * @param {Array<Item>} entries
 * @returns {Array<Item>|null}
 */
export const getAllSelectedItems = (entries) => {
  const selectedItems = entries.filter(entry => entry.isSelected === true);
  return selectedItems.length > 0 ? selectedItems : null;
};
