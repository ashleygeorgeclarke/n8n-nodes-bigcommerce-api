/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/abandoned-carts/settings": {
    /**
     * Get global abandoned cart settings
     * @description Return the global abandoned cart settings of a store.
     */
    get: operations["getGlobalAbandonedCartSettings"];
    /**
     * Update global abandoned cart settings
     * @description Update the global abandoned cart settings of a store.
     */
    put: operations["updateGlobalAbandonedCartSettings"];
  };
  "/abandoned-carts/settings/channels/{channel_id}": {
    /**
     * Get channel abandoned cart settings
     * @description Return the per-channel overrides for the abandoned cart settings of a store.
     */
    get: operations["getChannelAbandonedCartSettings"];
    /**
     * Update channel abandoned cart settings
     * @description Updates the per-channel overrides for the abandoned cart settings of a store.
     *
     * #### OAuth Scopes
     * | UI Name                                      | Permission | Parameter                                     |
     * |----------------------------------------------|------------|-----------------------------------------------|
     * | Information & Settings                       | modify     | `store_v2_information`                        |
     */
    put: operations["updateChannelAbandonedCartSettings"];
  };
  "/abandoned-carts/{token}": {
    /**
     * Get an abandoned cart
     * @description Return the `cart_id` corresponding to the abandoned cart `{token}` passed in.
     *
     * **Usage Notes**:
     * * `{token}` is the token in the query string of the abandoned cart link found in abandoned cart email notifications to shoppers
     */
    get: operations["getAbandonedCarts"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        /**
         * @description Unique cart `UUID`.
         *
         * Unique cart `UUID` token that is generated for abandoned cart emails.
         */
        token: string;
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /**
     * Response meta
     * @description Response metadata
     */
    metaEmpty_Full: {
      [key: string]: unknown;
    };
    /** error_Full */
    error_Full: {
      /**
       * Format: int32
       * @description The HTTP status code
       */
      status?: number;
      /** @description The error title describing the particular error */
      title?: string;
      type?: string;
    };
    /** errorDetailed_Full */
    errorDetailed_Full: {
      /** DetailedErrors */
      errors?: {
        [key: string]: string;
      };
    };
    /** abandonedCartInfo_Full */
    abandonedCartInfo_Full: {
      /** @description The `cart_id` of the abandoned cart. Can be used to display the abandoned cart to the customer using storefront cart or server-to-server cart APIs */
      cart_id?: string;
    };
    /** @description Represents all settings related to the abandoned cart functionality of a store */
    AbandonedCartSettings: {
      /** @description Indicates whether or not abandoned cart notification is on */
      enable_notification?: boolean;
      /** @description Indicates whether or not a customer should continue to receive abandoned cart emails until their cart is recovered */
      email_customer_until_cart_is_recovered?: boolean;
      /** @description Indicates whether or not a customer should receive abandoned cart emails based on their consent. By default customers will not receive emails */
      marketing_emails_require_customer_consent?: boolean;
      /** @description Indicates whether or not a merchant should receive a notification email when a cart is converted into an order */
      email_merchant_when_cart_is_converted?: boolean;
      /** @description Indicates whether or not a merchant should receive a notification email when a cart is abandoned */
      email_merchant_when_cart_is_abandoned?: boolean;
      /**
       * Format: email
       * @description The email address for receiving merchant notifications
       */
      merchant_email_address?: string;
      /**
       * @description Indicates whether to send an email for every abandoned cart, or to send a digest email after X number of abandoned carts
       * @enum {string}
       */
      merchant_abandoned_cart_email_frequency_type?: "digest" | "individual";
      /**
       * Format: int32
       * @description The number of abandoned carts to accumulate before a digest email is sent to a merchant
       */
      merchant_abandoned_cart_digest_email_frequency?: number;
    };
    /** @description Represents all settings overrides related to the abandoned cart functionality of a store for a channel */
    ChannelAbandonedCartSettings: {
      /** @description Indicates whether or not abandoned cart notification is on. If it is null, it means there is no override for the specified channel. */
      enable_notification?: boolean | null;
      /** @description Indicates whether or not a customer should continue to receive abandoned cart emails until their cart is recovered. If it is null, it means there is no override for the specified channel. */
      email_customer_until_cart_is_recovered?: boolean | null;
      /** @description Indicates whether or not a customer should receive abandoned cart emails based on their consent. If it is null, it means there is no override for the specified channel. By default customers will not receive emails. */
      marketing_emails_require_customer_consent?: boolean | null;
      /** @description Indicates whether or not a merchant should receive a notification email when a cart is converted into an order. If it is null, it means there is no override for the specified channel. */
      email_merchant_when_cart_is_converted?: boolean | null;
      /** @description Indicates whether or not a merchant should receive a notification email when a cart is abandoned. If it is null, it means there is no override for the specified channel. */
      email_merchant_when_cart_is_abandoned?: boolean | null;
      /**
       * Format: email
       * @description The email address for receiving merchant notifications. If it is null, it means there is no override for the specified channel.
       */
      merchant_email_address?: string | null;
      /**
       * @description Indicates whether to send an email for every abandoned cart or to send a digest email after X number of abandoned carts. If it is null, it means there is no override for the specified channel.
       * @enum {string|null}
       */
      merchant_abandoned_cart_email_frequency_type?: "digest" | "individual" | null;
      /**
       * Format: int32
       * @description The number of abandoned carts to accumulate before a digest email is sent to a merchant. If it is null, it means there is no override for the specified channel.
       */
      merchant_abandoned_cart_digest_email_frequency?: number | null;
    };
    ChannelAbandonedCartSettingsRequest: components["schemas"]["ChannelAbandonedCartSettings"];
    /** @description The response object of abandoned cart settings overrides for a channel */
    ChannelAbandonedCartSettingsResponse: {
      data?: components["schemas"]["ChannelAbandonedCartSettings"];
      meta?: components["schemas"]["metaEmpty_Full"];
    };
    GlobalAbandonedCartSettingsRequest: components["schemas"]["AbandonedCartSettings"];
    /** @description The response object of abandoned cart settings at the global level */
    GlobalAbandonedCartSettingsResponse: {
      data?: components["schemas"]["AbandonedCartSettings"];
      meta?: components["schemas"]["metaEmpty_Full"];
    };
    /** @description The response object containing details of an error */
    ErrorResponse: {
      /** Format: int32 */
      status?: number;
      title?: string;
      type?: string;
      instance?: string;
      errors?: {
        [key: string]: unknown;
      };
    };
  };
  responses: {
    /** @description If something happens during the request that causes it to fail, a 502 response will be returned. A new request should be made; however, it could fail. */
    "502_GatewayError": {
      content: {
        "application/json": components["schemas"]["error_Full"];
      };
    };
    /** @description If this occurs, you should retry the request. Typically retrying the request several times will result in a successful request; However, if you are unable to successfully make a request, please check the BigCommerce system status [here](https://status.bigcommerce.com/). A service is likely down and the request will need to be made again when it is back up (in several hours usually) */
    "504_GatewayTimeout": {
      content: {
        "application/json": components["schemas"]["errorDetailed_Full"];
      };
    };
    /**
     * @description Malformed request syntax. Typically need to fix the JSON
     * Body to resend successfully.
     */
    "400_BadRequest": {
      content: {
        "application/json": components["schemas"]["error_Full"];
      };
    };
    /** @description If the requested account resource is not found for the franchise, return a 404 Not Found. */
    "404_NotFound": {
      content: {
        "application/json": components["schemas"]["error_Full"];
      };
    };
    /** @description This occurs when missing or unacceptable data is passed for one or more fields. Please correct the values for the fields listed in the errors object. */
    "422_UnprocessableEntity": {
      content: {
        "application/json": components["schemas"]["errorDetailed_Full"];
      };
    };
    /** @description If this occurs, you should retry the request. If you are unable to successfully make a request, please check the BigCommerce system status [here](https://status.bigcommerce.com/). A service is likely down and the request will need to be made again when it is back up (in several hours usually) */
    "503_ServiceUnavailable": {
      content: {
        "application/json": components["schemas"]["error_Full"];
      };
    };
    /** @description Returned on `GET` requests to `/abandoned_carts`. */
    abandonedCart_Resp: {
      content: {
        "application/json": {
          data?: components["schemas"]["abandonedCartInfo_Full"];
          meta?: components["schemas"]["metaEmpty_Full"];
        };
      };
    };
  };
  parameters: {
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
   * Get global abandoned cart settings
   * @description Return the global abandoned cart settings of a store.
   */
  getGlobalAbandonedCartSettings: {
    parameters: {
      query?: {
        /** @description How many pages to return */
        pagination?: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["GlobalAbandonedCartSettingsResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["ErrorResponse"];
        };
      };
    };
  };
  /**
   * Update global abandoned cart settings
   * @description Update the global abandoned cart settings of a store.
   */
  updateGlobalAbandonedCartSettings: {
    parameters: {
      header: {
        "Content-Type": components["parameters"]["ContentType"];
        Accept: components["parameters"]["Accept"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["GlobalAbandonedCartSettingsRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["GlobalAbandonedCartSettingsResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["ErrorResponse"];
        };
      };
      /** @description Unprocessable entity */
      422: {
        content: {
          "application/json": components["schemas"]["ErrorResponse"];
        };
      };
    };
  };
  /**
   * Get channel abandoned cart settings
   * @description Return the per-channel overrides for the abandoned cart settings of a store.
   */
  getChannelAbandonedCartSettings: {
    parameters: {
      path: {
        /** @description The channel ID of the settings overrides */
        channel_id: number;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["ChannelAbandonedCartSettingsResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["ErrorResponse"];
        };
      };
    };
  };
  /**
   * Update channel abandoned cart settings
   * @description Updates the per-channel overrides for the abandoned cart settings of a store.
   *
   * #### OAuth Scopes
   * | UI Name                                      | Permission | Parameter                                     |
   * |----------------------------------------------|------------|-----------------------------------------------|
   * | Information & Settings                       | modify     | `store_v2_information`                        |
   */
  updateChannelAbandonedCartSettings: {
    parameters: {
      header: {
        "Content-Type": components["parameters"]["ContentType"];
        Accept: components["parameters"]["Accept"];
      };
      path: {
        /** @description The channel ID of the settings overrides */
        channel_id: number;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ChannelAbandonedCartSettingsRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["ChannelAbandonedCartSettingsResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["ErrorResponse"];
        };
      };
      /** @description Unprocessable entity */
      422: {
        content: {
          "application/json": components["schemas"]["ErrorResponse"];
        };
      };
    };
  };
  /**
   * Get an abandoned cart
   * @description Return the `cart_id` corresponding to the abandoned cart `{token}` passed in.
   *
   * **Usage Notes**:
   * * `{token}` is the token in the query string of the abandoned cart link found in abandoned cart email notifications to shoppers
   */
  getAbandonedCarts: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
      path: {
        /**
         * @description Unique cart `UUID`.
         *
         * Unique cart `UUID` token that is generated for abandoned cart emails.
         */
        token: string;
      };
    };
    responses: {
      200: components["responses"]["abandonedCart_Resp"];
      400: components["responses"]["400_BadRequest"];
      404: components["responses"]["404_NotFound"];
      422: components["responses"]["422_UnprocessableEntity"];
      502: components["responses"]["502_GatewayError"];
      503: components["responses"]["503_ServiceUnavailable"];
      504: components["responses"]["504_GatewayTimeout"];
      default: {
        content: never;
      };
    };
  };
}
