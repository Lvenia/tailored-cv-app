/**
 * Temporary solution for getting id, suitable in dev mode, when there is only one user handled
 * @returns {string}
 */
export const generateId = () => {
  return new Date().getTime().toString(); //temporary solution
};
//TODO: find better way to generate id

/**
 * Complex entry value
 * @typedef {Object} ComplexValue
 * @property {string} startDate - beginning of the time span
 * @property {string} endDate - ending of the time span
 * @property {string} header - time span header
 * @property {string} subheader - time span subheader
 * @property {Array<Entry>} bulletPoints - array of single resume entries
 */

/**
 * Simple entry value
 * @typedef {Object} EntryItem
 * @property {string} id
 * @property {string|ComplexValue} value
 */

/**
 * Resume entry
 * @typedef {Object} Entry
 * @property {EntryItem} item
 * @property {boolean} isSelected - entries state
 */

/**
 * Get value of the first selected entry
 * @param {Array<Entry>} entries - array of resume entries
 * @returns {string|null} - value of the first selected entry; if no entry is selected, returns null
 */
export const getSingleSelectedValue = (entries) => {
  const selectedItem = entries.find(entry => entry.isSelected);
  return selectedItem?.item?.value || null;
};

/**
 * Get all selected resume entries
 * @param {Array<Entry>} entries - array of resume entries
 * @returns {Array<Entry>|null} - array of selected entries; if no entry is selected, returns null
 */
export const getAllSelectedItems = (entries) => {
  const selectedItems = entries.filter(entry => entry.isSelected === true);
  return selectedItems.length > 0 ? selectedItems : null;
};
