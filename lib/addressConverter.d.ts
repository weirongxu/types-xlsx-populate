declare namespace AddressConverter {
  /**
   * Convert a column name to a number.
   * @param {string} name - The column name.
   * @returns {number} The number.
   */
  function columnNameToNumber(name: string): number;

  /**
   * Convert a column number to a name.
   * @param {number} number - The column number.
   * @returns {string} The name.
   */
  function columnNumberToName(number: number): string;

  type AddressReferenceObject =
    | {}
    | {
        sheetName: string;
      }
    | {
        type: "range";
        startColumnAnchored: boolean;
        startColumnName: string;
        startColumnNumber: number;
        startRowAnchored: boolean;
        startRowNumber: number;
        endColumnAnchored: boolean;
        endColumnName: string;
        endColumnNumber: number;
        endRowAnchored: boolean;
        endRowNumber: number;
      }
    | {
        type: "cell";
        columnAnchored: boolean;
        columnName: string;
        columnNumber: number;
        rowAnchored: boolean;
        rowNumber: number;
      }
    | {
        type: "columnRange";
        startColumnAnchored: boolean;
        startColumnName: string;
        startColumnNumber: number;
        endColumnAnchored: boolean;
        endColumnName: string;
        endColumnNumber: number;
      }
    | {
        type: "column";
        columnAnchored: boolean;
        columnName: string;
        columnNumber: number;
      }
    | {
        type: "rowRange";
        startRowAnchored: boolean;
        startRowNumber: number;
        endRowAnchored: boolean;
        endRowNumber: number;
      }
    | {
        type: "row";
        rowAnchored: boolean;
        rowNumber: number;
      };

  /**
   * Convert an address to a reference object.
   * @param {string} address - The address.
   * @returns {{}} The reference object.
   */
  function fromAddress(address: string): AddressReferenceObject | undefined;

  /**
   * Convert a reference object to an address.
   * @param {{}} ref - The reference object.
   * @returns {string} The address.
   */
  function toAddress(ref: AddressReferenceObject): string;
}

export = AddressConverter;
