/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/pricing/products": {
    /**
     * Get Prices (Batch)
     * @description Calculate batch pricing for products for a specific channel, currency, and customer group.
     *
     * **Limits**
     * * Limit of 50 concurrent requests.
     */
    post: operations["getPrices"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    BulkPricingTier: {
      /** @description The minimum quantity required to trigger this bulk pricing discount. */
      minimum?: number;
      /** @description The maximum quantity (or 0 for unlimited) to trigger this bulk pricing discount. */
      maximum?: number;
      discount_amount?: number;
      /** @enum {string} */
      discount_type?: "price" | "percent" | "fixed";
      /** @description Formats the `bulk_pricing.discount_amount` into the tax price amounts. */
      tax_discount_amount?: {
          /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
          as_entered?: number;
          /** @description The estimated tax inclusive price for this product based on the provided customer group. */
          tax_inclusive?: number;
          /** @description The estimated tax exclusive price for this product based on the provided customer group. */
          tax_exclusive?: number;
          /** @description Determines whether the 'as_entered' price is inclusive or exclusive of tax based on the store's tax jurisdiction. */
          entered_inclusive?: boolean;
        }[];
    };
    PricingResponse: {
      data?: ({
          /** @description The (required) product ID of the item. */
          product_id?: number;
          /** @description The (optional) variant ID of the item. */
          variant_id?: number;
          /** @description The optional product option configuration this price was generated for */
          options?: {
              /** @description The ID of the variant option or modifier option configured for this price */
              option_id?: number;
              /** @description The selected value ID for the configured option. */
              value_id?: number;
            }[];
          /** @description The (optional) RRP/retail price configured for this product. */
          retail_price?: {
            /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
            as_entered?: number;
            /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
            entered_inclusive?: boolean;
            /** @description The estimated tax exclusive price for this product based on the provided customer group. */
            tax_exclusive?: number;
            /** @description The estimated tax inclusive price for this product based on the provided customer group. */
            tax_inclusive?: number;
          };
          /** @description The price for a product including estimates for tax. */
          sale_price?: {
            /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
            as_entered?: number;
            /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
            entered_inclusive?: boolean;
            /** @description The estimated tax exclusive price for this product based on the provided customer group. */
            tax_exclusive?: number;
            /** @description The estimated tax inclusive price for this product based on the provided customer group. */
            tax_inclusive?: number;
          };
          /** @description The price for a product including estimates for tax. */
          minimum_advertised_price?: {
            /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
            as_entered?: number;
            /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
            entered_inclusive?: boolean;
            /** @description The estimated tax exclusive price for this product based on the provided customer group. */
            tax_exclusive?: number;
            /** @description The estimated tax inclusive price for this product based on the provided customer group. */
            tax_inclusive?: number;
          };
          /** @description The price for a product including estimates for tax. */
          price?: {
            /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
            as_entered?: number;
            /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
            entered_inclusive?: boolean;
            /** @description The estimated tax exclusive price for this product based on the provided customer group. */
            tax_exclusive?: number;
            /** @description The estimated tax inclusive price for this product based on the provided customer group. */
            tax_inclusive?: number;
          };
          /** @description The price for a product including estimates for tax. */
          calculated_price?: {
            /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
            as_entered?: number;
            /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
            entered_inclusive?: boolean;
            /** @description The estimated tax exclusive price for this product based on the provided customer group. */
            tax_exclusive?: number;
            /** @description The estimated tax inclusive price for this product based on the provided customer group. */
            tax_inclusive?: number;
          };
          /** @description For estimated prices, the minimum/maximum price that will typically apply to this product. */
          price_range?: {
            /** @description The price for a product including estimates for tax. */
            minimum?: {
              /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
              as_entered?: number;
              /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
              entered_inclusive?: boolean;
              /** @description The estimated tax exclusive price for this product based on the provided customer group. */
              tax_exclusive?: number;
              /** @description The estimated tax inclusive price for this product based on the provided customer group. */
              tax_inclusive?: number;
            };
            /** @description The price for a product including estimates for tax. */
            maximum?: {
              /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
              as_entered?: number;
              /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
              entered_inclusive?: boolean;
              /** @description The estimated tax exclusive price for this product based on the provided customer group. */
              tax_exclusive?: number;
              /** @description The estimated tax inclusive price for this product based on the provided customer group. */
              tax_inclusive?: number;
            };
          };
          /** @description For estimated prices, the minimum/maximum price that will typically apply to this product. */
          retail_price_range?: {
            /** @description The price for a product including estimates for tax. */
            minimum?: {
              /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
              as_entered?: number;
              /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
              entered_inclusive?: boolean;
              /** @description The estimated tax exclusive price for this product based on the provided customer group. */
              tax_exclusive?: number;
              /** @description The estimated tax inclusive price for this product based on the provided customer group. */
              tax_inclusive?: number;
            };
            /** @description The price for a product including estimates for tax */
            maximum?: {
              /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
              as_entered?: number;
              /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
              entered_inclusive?: boolean;
              /** @description The estimated tax exclusive price for this product based on the provided customer group. */
              tax_exclusive?: number;
              /** @description The estimated tax inclusive price for this product based on the provided customer group. */
              tax_inclusive?: number;
            };
          };
          bulk_pricing?: ({
              /** @description The minimum quantity required to trigger this bulk pricing discount. */
              minimum?: number;
              /** @description The maximum quantity (or 0 for unlimited) to trigger this bulk pricing discount. */
              maximum?: number;
              /** @description The price reduction set by the merchant for this bulk pricing discount. */
              discount_amount?: number;
              /**
               * @description The format of the price reduction set by the merchant for this bulk pricing discount.
               * @enum {string}
               */
              discount_type?: "price" | "percent" | "fixed";
              /** @description Formats the `bulk_pricing.discount_amount` into the tax price amounts. */
              tax_discount_amount?: {
                  /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
                  as_entered?: number;
                  /** @description The estimated tax inclusive price for this product based on the provided customer group. */
                  tax_inclusive?: number;
                  /** @description The estimated tax exclusive price for this product based on the provided customer group. */
                  tax_exclusive?: number;
                  /** @description Determines whether the 'as_entered' price is inclusive or exclusive of tax based on the store's tax jurisdiction. */
                  entered_inclusive?: boolean;
                }[];
            })[];
        })[];
      /** @description Response metadata. */
      meta?: {
        [key: string]: unknown;
      };
    };
    /** @description For estimated prices, the minimum/maximum price that will typically apply to this product. */
    PriceRange: {
      /** @description The price for a product including estimates for tax. */
      minimum?: {
        /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
        as_entered?: number;
        /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
        entered_inclusive?: boolean;
        /** @description The estimated tax exclusive price for this product based on the provided customer group. */
        tax_exclusive?: number;
        /** @description The estimated tax inclusive price for this product based on the provided customer group. */
        tax_inclusive?: number;
      };
      /** @description The price for a product including estimates for tax. */
      maximum?: {
        /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
        as_entered?: number;
        /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
        entered_inclusive?: boolean;
        /** @description The estimated tax exclusive price for this product based on the provided customer group. */
        tax_exclusive?: number;
        /** @description The estimated tax inclusive price for this product based on the provided customer group. */
        tax_inclusive?: number;
      };
    };
    /** @description The price for a product including estimates for tax. */
    TaxPrice: {
      /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
      as_entered?: number;
      /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
      entered_inclusive?: boolean;
      /** @description The estimated tax exclusive price for this product based on the provided customer group. */
      tax_exclusive?: number;
      /** @description The estimated tax inclusive price for this product based on the provided customer group. */
      tax_inclusive?: number;
    };
    ItemPricing: {
      /** @description The (required) product ID of the item. */
      product_id?: number;
      /** @description The (optional) variant ID of the item. */
      variant_id?: number;
      /** @description The optional product option configuration for which this price was generated. */
      options?: {
          /** @description The ID of the variant option or modifier option configured for this price. */
          option_id?: number;
          /** @description The selected value ID for the configured option. */
          value_id?: number;
        }[];
      /** @description The (optional) RRP/retail price configured for this product. */
      retail_price?: {
        /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
        as_entered?: number;
        /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
        entered_inclusive?: boolean;
        /** @description The estimated tax exclusive price for this product based on the provided customer group. */
        tax_exclusive?: number;
        /** @description The estimated tax inclusive price for this product based on the provided customer group. */
        tax_inclusive?: number;
      };
      /** @description The price for a product including estimates for tax. */
      sale_price?: {
        /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
        as_entered?: number;
        /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
        entered_inclusive?: boolean;
        /** @description The estimated tax exclusive price for this product based on the provided customer group. */
        tax_exclusive?: number;
        /** @description The estimated tax inclusive price for this product based on the provided customer group. */
        tax_inclusive?: number;
      };
      /** @description The price for a product including estimates for tax. */
      minimum_advertised_price?: {
        /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
        as_entered?: number;
        /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
        entered_inclusive?: boolean;
        /** @description The estimated tax exclusive price for this product based on the provided customer group. */
        tax_exclusive?: number;
        /** @description The estimated tax inclusive price for this product based on the provided customer group. */
        tax_inclusive?: number;
      };
      /** @description The price for a product including estimates for tax. */
      price?: {
        /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
        as_entered?: number;
        /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
        entered_inclusive?: boolean;
        /** @description The estimated tax exclusive price for this product based on the provided customer group. */
        tax_exclusive?: number;
        /** @description The estimated tax inclusive price for this product based on the provided customer group. */
        tax_inclusive?: number;
      };
      /** @description The price for a product including estimates for tax. */
      calculated_price?: {
        /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
        as_entered?: number;
        /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
        entered_inclusive?: boolean;
        /** @description The estimated tax exclusive price for this product based on the provided customer group. */
        tax_exclusive?: number;
        /** @description The estimated tax inclusive price for this product based on the provided customer group. */
        tax_inclusive?: number;
      };
      /** @description For estimated prices, the minimum/maximum price that will typically apply to this product. */
      price_range?: {
        /** @description The price for a product including estimates for tax. */
        minimum?: {
          /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
          as_entered?: number;
          /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
          entered_inclusive?: boolean;
          /** @description The estimated tax exclusive price for this product based on the provided customer group. */
          tax_exclusive?: number;
          /** @description The estimated tax inclusive price for this product based on the provided customer group. */
          tax_inclusive?: number;
        };
        /** @description The price for a product including estimates for tax. */
        maximum?: {
          /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
          as_entered?: number;
          /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax. jurisdiction */
          entered_inclusive?: boolean;
          /** @description The estimated tax exclusive price for this product based on the provided customer group. */
          tax_exclusive?: number;
          /** @description The estimated tax inclusive price for this product based on the provided customer group. */
          tax_inclusive?: number;
        };
      };
      /** @description For estimated prices, the minimum/maximum price that will typically apply to this product. */
      retail_price_range?: {
        /** @description The price for a product including estimates for tax. */
        minimum?: {
          /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
          as_entered?: number;
          /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
          entered_inclusive?: boolean;
          /** @description The estimated tax exclusive price for this product based on the provided customer group. */
          tax_exclusive?: number;
          /** @description The estimated tax inclusive price for this product based on the provided customer group. */
          tax_inclusive?: number;
        };
        /** @description The price for a product including estimates for tax. */
        maximum?: {
          /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
          as_entered?: number;
          /** @description Whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
          entered_inclusive?: boolean;
          /** @description The estimated tax exclusive price for this product based on the provided customer group. */
          tax_exclusive?: number;
          /** @description The estimated tax inclusive price for this product based on the provided customer group. */
          tax_inclusive?: number;
        };
      };
      bulk_pricing?: components["schemas"]["BulkPricingTier"][];
    };
    /** @description Details/configuration for the product to request a price for. */
    Item: {
      /** @description The (required) product ID of the item. */
      product_id?: number;
      /** @description The (optional) variant ID of the item. */
      variant_id?: number;
      /** @description The (optional) option configuration of the product. May be "partially" configured for estimates. */
      options?: {
          /** @description The ID of the variant option or modifier option being configured for this product. */
          option_id?: number;
          /**
           * @description The ID of the value matching the option being configured.
           *
           * **Note:** must be ID, not the value.
           */
          value_id?: number;
        }[];
    };
    PricingRequest: {
      /**
       * @description The channel ID that pricing evaluates within. The default BigCommerce storefront is channel 1.
       * @example 1
       */
      channel_id?: number;
      /**
       * @description The currency of prices to be returned for this request.
       * @example USD
       */
      currency_code?: string;
      /** @description The customer group relevant for any customer group pricing, tax values, etc. */
      customer_group_id?: number;
      /** @description The items for which to fetch prices. */
      items?: {
          /** @description The (required) product ID of the item. */
          product_id?: number;
          /** @description The (optional) variant ID of the item. */
          variant_id?: number;
          /** @description The (optional) option configuration of the product. May be "partially" configured for estimates. */
          options?: {
              /** @description The ID of the variant option or modifier option being configured for this product. */
              option_id?: number;
              /**
               * @description The ID of the value matching the option being configured.
               *
               * **Note:** This must be the ID, not the value.
               */
              value_id?: number;
            }[];
        }[];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Get Prices (Batch)
   * @description Calculate batch pricing for products for a specific channel, currency, and customer group.
   *
   * **Limits**
   * * Limit of 50 concurrent requests.
   */
  getPrices: {
    requestBody: {
      content: {
        "application/json": {
          /**
           * @description The channel ID that pricing evaluates within. The default BigCommerce storefront is channel 1.
           * @example 1
           */
          channel_id: number;
          /**
           * @description The currency code of prices this request returns.
           * @example USD
           */
          currency_code: string;
          /** @description The customer group ID that's relevant for any customer group pricing, tax values, etc. */
          customer_group_id: number;
          /** @description The items for which to fetch prices. */
          items: {
              /** @description The (required) product ID of the item. */
              product_id?: number;
              /** @description The (optional) variant ID of the item. */
              variant_id?: number;
              /** @description The option configuration of the product (optional); might be partially configured for estimates. */
              options?: {
                  /** @description The ID of the variant option or modifier option that is being configured for this product. */
                  option_id?: number;
                  /**
                   * @description The ID of the value matching the option that's being configured.
                   *
                   * **Note:*** This must be the ID, not the value.
                   */
                  value_id?: number;
                }[];
            }[];
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": {
            data?: {
                /** @description The (required) product ID of the item. */
                product_id?: number;
                /** @description The (optional) variant ID of the item. */
                variant_id?: number;
                /** @description The optional product option configuration for which this price was generated. */
                options?: {
                    /** @description The ID of the variant option or modifier option configured for this price. */
                    option_id?: number;
                    /** @description The selected value ID for the configured option. */
                    value_id?: number;
                  }[];
                /** @description The (optional) RRP/retail price configured for this product. Used for price comparison and storefront display purposes. */
                retail_price?: {
                  /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
                  as_entered?: number;
                  /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
                  entered_inclusive?: boolean;
                  /** @description The estimated tax exclusive price for this product based on the provided customer group. */
                  tax_exclusive?: number;
                  /** @description The estimated tax inclusive price for this product based on the provided customer group. */
                  tax_inclusive?: number;
                };
                /** @description The merchant-entered sale price for a product overwrites the default price. The sale_price is optional. */
                sale_price?: {
                  /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
                  as_entered?: number;
                  /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
                  entered_inclusive?: boolean;
                  /** @description The estimated tax exclusive price for this product based on the provided customer group. */
                  tax_exclusive?: number;
                  /** @description The estimated tax inclusive price for this product based on the provided customer group. */
                  tax_inclusive?: number;
                };
                /** @description The minimum advertised price (MAP) allowed to be shown on a storefront. A value supplied by the merchant and used for display purposes. */
                minimum_advertised_price?: {
                  /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
                  as_entered?: number;
                  /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
                  entered_inclusive?: boolean;
                  /** @description The estimated tax exclusive price for this product based on the provided customer group. */
                  tax_exclusive?: number;
                  /** @description The estimated tax inclusive price for this product based on the provided customer group. */
                  tax_inclusive?: number;
                };
                /** @description The merchant-entered price for a product could be including or excluding tax. Price must be defined when creating a product and serves as the default price. */
                price?: {
                  /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
                  as_entered?: number;
                  /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
                  entered_inclusive?: boolean;
                  /** @description The estimated tax exclusive price for this product based on the provided customer group. */
                  tax_exclusive?: number;
                  /** @description The estimated tax inclusive price for this product based on the provided customer group. */
                  tax_inclusive?: number;
                };
                /** @description The shopper price for a product including modifier, option, and option set rules. The `calculated_price` may include or exclude estimates for tax. */
                calculated_price?: {
                  /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
                  as_entered?: number;
                  /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
                  entered_inclusive?: boolean;
                  /** @description The estimated tax exclusive price for this product based on the provided customer group. */
                  tax_exclusive?: number;
                  /** @description The estimated tax inclusive price for this product based on the provided customer group. */
                  tax_inclusive?: number;
                };
                /** @description The minimum and maximum price that will typically apply to this product. Only used for complex products (products with variants). */
                price_range?: {
                  /** @description The price for a product including estimates for tax. */
                  minimum?: {
                    /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
                    as_entered?: number;
                    /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
                    entered_inclusive?: boolean;
                    /** @description The estimated tax exclusive price for this product based on the provided customer group. */
                    tax_exclusive?: number;
                    /** @description The estimated tax inclusive price for this product based on the provided customer group. */
                    tax_inclusive?: number;
                  };
                  /** @description The price for a product including estimates for tax. */
                  maximum?: {
                    /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
                    as_entered?: number;
                    /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
                    entered_inclusive?: boolean;
                    /** @description The estimated tax exclusive price for this product based on the provided customer group. */
                    tax_exclusive?: number;
                    /** @description The estimated tax inclusive price for this product based on the provided customer group. */
                    tax_inclusive?: number;
                  };
                };
                /** @description The productʼs variants that will typically apply to this product. */
                retail_price_range?: {
                  /** @description The price for a product including estimates for tax. */
                  minimum?: {
                    /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
                    as_entered?: number;
                    /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
                    entered_inclusive?: boolean;
                    /** @description The estimated tax exclusive price for this product based on the provided customer group. */
                    tax_exclusive?: number;
                    /** @description The estimated tax inclusive price for this product based on the provided customer group. */
                    tax_inclusive?: number;
                  };
                  /** @description The price for a product including estimates for tax. */
                  maximum?: {
                    /** @description The price provided by the merchant as entered in their catalog/price list; may include or exclude tax. */
                    as_entered?: number;
                    /** @description Determines whether the `as_entered` price is inclusive or exclusive of tax, based on the stores tax jurisdiction. */
                    entered_inclusive?: boolean;
                    /** @description The estimated tax exclusive price for this product based on the provided customer group. */
                    tax_exclusive?: number;
                    /** @description The estimated tax inclusive price for this product based on the provided customer group. */
                    tax_inclusive?: number;
                  };
                };
                bulk_pricing?: components["schemas"]["BulkPricingTier"][];
              }[];
            /** @description Response metadata. */
            meta?: {
              [key: string]: unknown;
            };
          };
        };
      };
    };
  };
}
