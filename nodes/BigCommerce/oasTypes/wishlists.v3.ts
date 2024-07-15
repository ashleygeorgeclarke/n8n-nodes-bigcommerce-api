/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/wishlists": {
    /**
     * Get All Wishlists
     * @description Returns a list of wishlists. Optional filter parameters can be passed in.
     */
    get: operations["getWishlists"];
    /**
     * Create a Wishlist
     * @description Creates a wishlist and wishlist item. More than one item can be added in the POST.
     *
     * **Required Fields**
     * * name
     * * customer_id
     */
    post: operations["createWishlist"];
  };
  "/wishlists/{wishlist_id}/items/{item_id}": {
    /**
     * Delete Wishlist Item
     * @description Deletes a wishlist item.
     */
    delete: operations["deleteWishlistItem"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        wishlist_id: components["parameters"]["WishlistIdPath"];
        item_id: components["parameters"]["ItemIdPath"];
      };
    };
  };
  "/wishlists/{wishlist_id}": {
    /**
     * Get a Wishlist
     * @description Returns a single wishlist.
     */
    get: operations["getWishlist"];
    /**
     * Update a Wishlist
     * @description Updates a wishlist.
     *
     * Use this endpoint to update existing wishlist items, change the wishlistʼs name and whether the wishlist is available publicly. To add or delete a wishlist item, see [Wishlist Items](/docs/rest-management/wishlists/wishlists-items).
     */
    put: operations["updateWishlist"];
    /**
     * Delete a Wishlist
     * @description Deletes a wishlist.
     */
    delete: operations["deleteWishlist"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        wishlist_id: components["parameters"]["WishlistIdPath"];
      };
    };
  };
  "/wishlists/{wishlist_id}/items": {
    /**
     * Add Wishlist Item
     * @description Adds a wishlist item. More than one item can be added at a time.
     */
    post: operations["addWishlistItem"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        wishlist_id: components["parameters"]["WishlistIdPath"];
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** wishlist_Post */
    wishlist_Post: {
      /**
       * Format: int32
       * @description The customer id.
       * @example 12
       */
      customer_id: number;
      /**
       * @description Whether the wishlist is available to the public.
       * @example false
       */
      is_public?: boolean;
      /**
       * @description The title of the wishlist.
       * @example School Shopping
       */
      name?: string;
      /** @description Array of wishlist items. */
      items?: {
          /**
           * Format: int32
           * @description The ID of the product.
           * @example 12
           */
          product_id?: number;
          /**
           * Format: int32
           * @description The variant ID of the product.
           * @example 152
           */
          variant_id?: number;
        }[];
    };
    /** wishlist_Put */
    wishlist_Put: {
      /**
       * Format: int32
       * @description The customer ID. A read-only value.
       */
      customer_id: number;
      /** @description Whether the wishlist is available to the public. */
      is_public?: boolean;
      /** @description The title of the wishlist. */
      name?: string;
      /** @description Array of wishlist items. */
      items: {
          /**
           * Format: int32
           * @description The ID of the item.
           * @example 12
           */
          id?: number;
          /**
           * Format: int32
           * @description The ID of the product.
           * @example 55
           */
          product_id?: number;
          /**
           * Format: int32
           * @description The variant ID of the product.
           * @example 22
           */
          variant_id?: number;
        }[];
    };
    /** wishlist_Full */
    wishlist_Full: {
      /**
       * Format: int32
       * @description Wishlist ID, provided after creating a wishlist with a POST.
       * @example 30
       */
      id?: number;
      /**
       * Format: int32
       * @description The ID the customer to which the wishlist belongs.
       * @example 12
       */
      customer_id?: number;
      /**
       * @description The name of the wishlist.
       * @example Christmas List
       */
      name?: string;
      /**
       * @description Whether the wishlist is available to the public.
       * @example true
       */
      is_public?: boolean;
      /**
       * Format: uuid
       * @description The token of the wishlist. This is created internally within BigCommerce. The wishlist ID is to be used for external apps. Read-Only.
       * @example 02d55481-13eb-4d1e-9d79-9062b518570d
       */
      token?: string;
      /** @description Array of wishlist items. */
      items?: components["schemas"]["wishlistItem_Full"][];
    };
    /** wishlistItem_Full */
    wishlistItem_Full: {
      /**
       * Format: int32
       * @description The ID of the item.
       * @example 12
       */
      id?: number;
      /**
       * Format: int32
       * @description The ID of the product.
       * @example 55
       */
      product_id?: number;
      /**
       * Format: int32
       * @description The variant ID of the product.
       * @example 22
       */
      variant_id?: number;
    };
    /** wishlistItem_Post */
    wishlistItem_Post: {
      items?: {
          /** @example 12 */
          product_id?: number;
          /** @example 152 */
          variant_id?: number;
        }[];
    };
    /**
     * pagination
     * @description Data about the response, including pagination and collection totals.
     */
    pagination: {
      /**
       * Format: int32
       * @description Total number of items in the result set.
       */
      total?: number;
      /**
       * Format: int32
       * @description Total number of items in the collection response.
       */
      count?: number;
      /**
       * Format: int32
       * @description The amount of items returned in the collection per page, controlled by the limit parameter.
       */
      per_page?: number;
      /**
       * Format: int32
       * @description The page you are currently on within the collection.
       */
      current_page?: number;
      /**
       * Format: int32
       * @description The total number of pages in the collection.
       */
      total_pages?: number;
    };
    /** metaCollection */
    metaCollection: {
      pagination?: components["schemas"]["pagination"];
    };
  };
  responses: never;
  parameters: {
    /** @description ID of the Wishlist. */
    WishlistIdPath: number;
    ItemIdPath: number;
    /** @description All wishlists relating to the customer. */
    CustomerIdQuery?: number;
    /** @description The page number of results to return. 1 is the default and starts from record 0. Use in conjunction with the limit query parameter to request a specific set of records. */
    PageQuery?: number;
    /** @description The number of items to return per page. Default is 50 and maximum is 250. */
    LimitQuery?: number;
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body. */
    Accept: string;
    /** @description The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body. */
    ContentType: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Get All Wishlists
   * @description Returns a list of wishlists. Optional filter parameters can be passed in.
   */
  getWishlists: {
    parameters: {
      query?: {
        customer_id?: components["parameters"]["CustomerIdQuery"];
        page?: components["parameters"]["PageQuery"];
        limit?: components["parameters"]["LimitQuery"];
      };
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["wishlist_Full"][];
            meta?: components["schemas"]["metaCollection"];
          };
        };
      };
      /** @description Authentication information is missing or invalid. */
      401: {
        content: {
          "application/json": {
            /** Format: int32 */
            status?: number;
            title?: string;
            type?: string;
          };
        };
      };
      /** @description Internal server error. */
      500: {
        content: {
          "application/json": {
            /** Format: int32 */
            status?: number;
            title?: string;
            type?: string;
          };
        };
      };
    };
  };
  /**
   * Create a Wishlist
   * @description Creates a wishlist and wishlist item. More than one item can be added in the POST.
   *
   * **Required Fields**
   * * name
   * * customer_id
   */
  createWishlist: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["wishlist_Post"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": {
            data?: components["schemas"]["wishlist_Full"];
            /** @description Response metadata. */
            meta?: {
              [key: string]: unknown;
            };
          };
        };
      };
      /** @description Authentication information is missing or invalid. */
      401: {
        content: {
          "application/json": {
            /** Format: int32 */
            status?: number;
            title?: string;
            type?: string;
          };
        };
      };
      /** @description Internal server error. */
      500: {
        content: {
          "application/json": {
            /** Format: int32 */
            status?: number;
            title?: string;
            type?: string;
          };
        };
      };
    };
  };
  /**
   * Delete Wishlist Item
   * @description Deletes a wishlist item.
   */
  deleteWishlistItem: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        wishlist_id: components["parameters"]["WishlistIdPath"];
        item_id: components["parameters"]["ItemIdPath"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["wishlist_Full"];
            /** @description Response metadata. */
            meta?: {
              [key: string]: unknown;
            };
          };
        };
      };
      /** @description Authentication information is missing or invalid. */
      401: {
        content: {
          "application/json": {
            /** Format: int32 */
            status?: number;
            title?: string;
            type?: string;
          };
        };
      };
      /** @description Wishlist not found. */
      404: {
        content: {
          "application/json": Record<string, never>;
        };
      };
      /** @description Internal server error. */
      500: {
        content: {
          "application/json": {
            /** Format: int32 */
            status?: number;
            title?: string;
            type?: string;
          };
        };
      };
    };
  };
  /**
   * Get a Wishlist
   * @description Returns a single wishlist.
   */
  getWishlist: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        wishlist_id: components["parameters"]["WishlistIdPath"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": {
            data?: components["schemas"]["wishlist_Full"];
            /** @description Response metadata. */
            meta?: {
              [key: string]: unknown;
            };
          };
        };
      };
      /** @description Authentication information is missing or invalid. */
      401: {
        content: {
          "application/json": {
            /** Format: int32 */
            status?: number;
            title?: string;
            type?: string;
          };
        };
      };
      /** @description Wishlist not found. */
      404: {
        content: {
          "application/json": Record<string, never>;
        };
      };
      /** @description Internal server error. */
      500: {
        content: {
          "application/json": {
            /** Format: int32 */
            status?: number;
            title?: string;
            type?: string;
          };
        };
      };
    };
  };
  /**
   * Update a Wishlist
   * @description Updates a wishlist.
   *
   * Use this endpoint to update existing wishlist items, change the wishlistʼs name and whether the wishlist is available publicly. To add or delete a wishlist item, see [Wishlist Items](/docs/rest-management/wishlists/wishlists-items).
   */
  updateWishlist: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
      path: {
        wishlist_id: components["parameters"]["WishlistIdPath"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["wishlist_Put"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": {
            data?: components["schemas"]["wishlist_Full"];
            /** @description Response metadata. */
            meta?: {
              [key: string]: unknown;
            };
          };
        };
      };
      /** @description Authentication information is missing or invalid. */
      401: {
        content: {
          "application/json": {
            /** Format: int32 */
            status?: number;
            title?: string;
            type?: string;
          };
        };
      };
      /** @description Internal server error. */
      500: {
        content: {
          "application/json": {
            /** Format: int32 */
            status?: number;
            title?: string;
            type?: string;
          };
        };
      };
    };
  };
  /**
   * Delete a Wishlist
   * @description Deletes a wishlist.
   */
  deleteWishlist: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        wishlist_id: components["parameters"]["WishlistIdPath"];
      };
    };
    responses: {
      204: {
        content: {
        };
      };
      /** @description Authentication information is missing or invalid. */
      401: {
        content: {
          "application/json": {
            /** Format: int32 */
            status?: number;
            title?: string;
            type?: string;
          };
        };
      };
      /** @description Internal server error. */
      500: {
        content: {
          "application/json": {
            /** Format: int32 */
            status?: number;
            title?: string;
            type?: string;
          };
        };
      };
    };
  };
  /**
   * Add Wishlist Item
   * @description Adds a wishlist item. More than one item can be added at a time.
   */
  addWishlistItem: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
      path: {
        wishlist_id: components["parameters"]["WishlistIdPath"];
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["wishlistItem_Post"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": {
            data?: components["schemas"]["wishlist_Full"];
            /** @description Response metadata. */
            meta?: {
              [key: string]: unknown;
            };
          };
        };
      };
      /** @description Authentication information is missing or invalid. */
      401: {
        content: {
          "application/json": {
            /** Format: int32 */
            status?: number;
            title?: string;
            type?: string;
          };
        };
      };
      /** @description Wishlist not found. */
      404: {
        content: {
        };
      };
      /** @description Internal server error. */
      500: {
        content: {
        };
      };
    };
  };
}
