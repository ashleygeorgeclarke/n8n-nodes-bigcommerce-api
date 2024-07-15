/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/tax/properties": {
    /**
     * Get Tax Properties
     * @description Retrieve all tax properties defined in this store.
     */
    get: operations["getTaxProperties"];
    /**
     * Update Tax Properties
     * @description Update one or more tax properties. Only fields specified will be adjusted.
     */
    put: operations["updateTaxProperties"];
    /**
     * Create Tax Properties
     * @description Create one or more tax properties. A **code** and a **display name** must be included when creating tax properties.
     */
    post: operations["createTaxProperties"];
    /**
     * Delete Tax Properties
     * @description Delete one or multiple tax properties. A tax property must have zero usages within product tax properties before you can delete it.
     */
    delete: operations["deleteTaxProperties"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/tax/products/properties": {
    /**
     * Get Product Tax Properties
     * @description Retrieve the tax properties that are associated with one or more products.
     */
    get: operations["getProductsTaxProperties"];
    /**
     * Update Product Tax Properties
     * @description Update the tax properties associated with one or more products. This operation will be additive to any tax property values already associated with the product, overwriting any existing tax property values.
     */
    put: operations["updateProductTaxProperties"];
    /**
     * Delete Product Tax Properties
     * @description Delete tax properties that are associated with one or more products.
     */
    delete: operations["deleteProductTaxProperties"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Property: {
      /**
       * @description An internal identifier used by other operations.
       * @example 1
       */
      id?: number;
      /**
       * @description The unique string programmatically references this unique tax property by the tax provider. Merchants should liaise with their tax provider to explore supported values and functions.
       * @example A-123456789
       */
      code?: string;
      /**
       * @description The human-readable name for this property. This string will be displayed on the Products screen as a field label.
       * @example Example Tax Property 1
       */
      display_name?: string;
      /**
       * @description Optional. Additional detail about this tax property may help guide merchants. This string will be displayed on the Products screen as a tooltip associated with the relevant field.
       * @example Food Industry
       */
      description?: string;
      /**
       * Format: date-time
       * @description Datetime.
       * @example "2022-07-21T19:33:57.000Z"
       */
      created_at?: string;
      /**
       * Format: date-time
       * @description Datetime.
       * @example "2022-07-21T19:33:57.000Z"
       */
      updated_at?: string;
    };
    PropertyPOST: {
      /**
       * @description The unique string programmatically references this unique tax property by the tax provider. Merchants should liaise with their tax provider to explore supported values and functions.
       * @example A-123456789
       */
      code: string;
      /**
       * @description The human-readable name for this property. This string will be displayed on the Products screen as a field label.
       * @example Example Tax Property 1
       */
      display_name: string;
      /**
       * @description Additional detail about this tax property may help guide merchants. This string will be displayed on the Products screen as a tooltip associated with the relevant field.
       * @example Food Industry
       */
      description?: string;
    };
    PropertyPUT: {
      /**
       * @description An internal identifier used by other operations.
       * @example 1
       */
      id: number;
      /**
       * @description The unique string programmatically references this unique tax property by the tax provider. Merchants should liaise with their tax provider to explore supported values and functions.
       * @example A-123456789
       */
      code?: string;
      /**
       * @description The human-readable name for this property. This string will be displayed on the Products screen as a field label.
       * @example Example Tax Property 1
       */
      display_name?: string;
      /**
       * @description Optional. Additional detail about this tax property may help guide merchants. This string will be displayed on the Products screen as a tooltip associated with the relevant field.
       * @example Food Industry
       */
      description?: string;
    };
    /** @description A collection of tax property values associated with a product. */
    ProductTaxProperty: {
      /**
       * @description A reference to the product that the product tax properties are associated with.
       * @example 157
       */
      product_id: number;
      /**
       * @description A simple key-value pairing. The tax property must be defined to associate a value. These values will be sent to the active tax provider during Tax Provider API operations whenever the associated product is included in the operation.
       * @example {
       *   "A-123456789": "26",
       *   "B-6731789": "200"
       * }
       */
      tax_properties: {
        [key: string]: unknown;
      };
    };
    /**
     * Response meta
     * @description Response metadata.
     */
    MetaOpen: {
      [key: string]: unknown;
    };
  };
  responses: never;
  parameters: {
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
    Accept: string;
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
    ContentType: string;
    /** @description ID of product. To target multiple products, provide a comma-separated list of IDs such as `12,34,56`. */
    product_idin: number[];
    /** @description ID of tax property. To target multiple tax properties, provide a comma-separated list of IDs such as `12,34,56`. */
    idin?: number[];
    /** @description ID of tax property. To target multiple tax properties, provide a comma-separated list of IDs such as `12,34,56`. */
    idin_required: number[];
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Get Tax Properties
   * @description Retrieve all tax properties defined in this store.
   */
  getTaxProperties: {
    parameters: {
      query?: {
        "id:in"?: components["parameters"]["idin"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["Property"][];
            meta?: components["schemas"]["MetaOpen"];
          };
        };
      };
      /** @description Request parameters invalid */
      400: {
        content: never;
      };
    };
  };
  /**
   * Update Tax Properties
   * @description Update one or more tax properties. Only fields specified will be adjusted.
   */
  updateTaxProperties: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PropertyPUT"][];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["Property"][];
            meta?: components["schemas"]["MetaOpen"];
          };
        };
      };
      /** @description The request body does not meet specifications. */
      422: {
        content: never;
      };
    };
  };
  /**
   * Create Tax Properties
   * @description Create one or more tax properties. A **code** and a **display name** must be included when creating tax properties.
   */
  createTaxProperties: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PropertyPOST"][];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["Property"][];
            meta?: components["schemas"]["MetaOpen"];
          };
        };
      };
      /** @description The request body does not meet specifications. */
      422: {
        content: never;
      };
    };
  };
  /**
   * Delete Tax Properties
   * @description Delete one or multiple tax properties. A tax property must have zero usages within product tax properties before you can delete it.
   */
  deleteTaxProperties: {
    parameters: {
      query: {
        "id:in": components["parameters"]["idin_required"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description No Content */
      204: {
        content: never;
      };
      /** @description Request parameters invalid */
      400: {
        content: never;
      };
      /** @description Tax Property is in use and cannot be deleted. */
      409: {
        content: never;
      };
    };
  };
  /**
   * Get Product Tax Properties
   * @description Retrieve the tax properties that are associated with one or more products.
   */
  getProductsTaxProperties: {
    parameters: {
      query: {
        "product_id:in": components["parameters"]["product_idin"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["ProductTaxProperty"][];
            meta?: components["schemas"]["MetaOpen"];
          };
        };
      };
      /** @description Request parameters invalid */
      400: {
        content: never;
      };
    };
  };
  /**
   * Update Product Tax Properties
   * @description Update the tax properties associated with one or more products. This operation will be additive to any tax property values already associated with the product, overwriting any existing tax property values.
   */
  updateProductTaxProperties: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ProductTaxProperty"][];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["ProductTaxProperty"][];
            meta?: components["schemas"]["MetaOpen"];
          };
        };
      };
      /** @description The request body does not meet specifications. */
      422: {
        content: never;
      };
    };
  };
  /**
   * Delete Product Tax Properties
   * @description Delete tax properties that are associated with one or more products.
   */
  deleteProductTaxProperties: {
    parameters: {
      query: {
        "product_id:in": components["parameters"]["product_idin"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      /** @description No Content */
      204: {
        content: never;
      };
      /** @description Request parameters invalid */
      400: {
        content: never;
      };
    };
  };
}
