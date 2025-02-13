/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/storefront/api-token": {
    /**
     * Create a Token
     * @description Creates a Storefront API token.
     *
     * **Required Scopes**
     * * `Manage` `Storefront API Tokens`
     */
    post: operations["createToken"];
    /**
     * Revoke a Token
     * @description Revoke access for a Storefront API token. Only revoke compromised tokens under emergency situations. Let uncompromised short-lived tokens expire naturally, as you do not need to revoke these.
     */
    delete: operations["revokeToken"];
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
      };
    };
  };
  "/storefront/api-token-customer-impersonation": {
    /**
     * Create a Token
     * @description Returns a Storefront API token that allows your application to impersonate customers when making GraphQL `POST` requests. For more information on how to use the returned token, see [customer impersonation tokens](/docs/rest-authentication/tokens/customer-impersonation-token#create-a-token).
     *
     * **Required Scopes**
     * * `Manage` `Storefront API Customer Impersonation Tokens`
     */
    post: operations["createTokenWithCustomerImpersonation"];
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
    TokenPostImpersonation: {
      /**
       * @description Channel ID for requested token
       * @example 1
       */
      channel_id: number;
      /**
       * @description Unix timestamp (UTC time) defining when the token should expire. Supports seconds, but does not support milliseconds, microseconds, or nanoseconds.
       * @example 1885635176
       */
      expires_at: number;
    };
    TokenPostSimple: {
      /** @description List of allowed domains for Cross-Origin Request Sharing. Currently accepts a maximum of two domains per created token. */
      allowed_cors_origins?: string[];
    };
    Token_Full: {
      data?: components["schemas"]["Token_Base"];
      /** @description Response metadata. */
      meta?: {
        [key: string]: unknown;
      };
    };
    Token_Base: {
      /** @description JWT Token for accessing the Storefront API */
      token?: string;
    };
    ErrorResponse: components["schemas"]["BaseError"] & {
      errors?: components["schemas"]["DetailedErrors"];
    };
    /** @description Error payload for the BigCommerce API. */
    BaseError: {
      /** @description The HTTP status code. */
      status?: number;
      /** @description The error title describing the particular error. */
      title?: string;
      type?: string;
    };
    DetailedErrors: {
      [key: string]: string;
    };
  };
  responses: {
    TokenResponse: {
      content: {
        "application/json": components["schemas"]["Token_Full"];
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
   * Create a Token
   * @description Creates a Storefront API token.
   *
   * **Required Scopes**
   * * `Manage` `Storefront API Tokens`
   */
  createToken: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["TokenPostSimple"] & components["schemas"]["TokenPostImpersonation"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Token_Full"];
        };
      };
      /** @description Unauthorized - the v3 Auth client ID or token in the request are not a valid combination for this store. */
      401: {
        content: {
        };
      };
      /** @description Missing scope - the v3 Auth token is valid but does not have proper permissions to access this endpoint. */
      403: {
        content: {
        };
      };
      /** @description Invalid JSON request body - missing or invalid data. */
      422: {
        content: {
        };
      };
    };
  };
  /**
   * Revoke a Token
   * @description Revoke access for a Storefront API token. Only revoke compromised tokens under emergency situations. Let uncompromised short-lived tokens expire naturally, as you do not need to revoke these.
   */
  revokeToken: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        /** @description An existing JWT token that you want to revoke. */
        "Sf-Api-Token": string;
      };
    };
    responses: {
      /** @description A storefront API token revocation has been scheduled. */
      200: {
        content: {
        };
      };
      /** @description Unauthorized - the v3 Auth client ID or token in the request are not a valid combination for this store. */
      401: {
        content: {
        };
      };
      /** @description Missing scope - the v3 Auth token is valid but does not have proper permissions to access this endpoint. */
      403: {
        content: {
        };
      };
      /** @description Invalid JWT Token provided or missing JWT token header */
      422: {
        content: {
        };
      };
    };
  };
  /**
   * Create a Token
   * @description Returns a Storefront API token that allows your application to impersonate customers when making GraphQL `POST` requests. For more information on how to use the returned token, see [customer impersonation tokens](/docs/rest-authentication/tokens/customer-impersonation-token#create-a-token).
   *
   * **Required Scopes**
   * * `Manage` `Storefront API Customer Impersonation Tokens`
   */
  createTokenWithCustomerImpersonation: {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["TokenPostImpersonation"];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Token_Full"];
        };
      };
      /** @description Unauthorized - the v3 Auth client ID or token in the request are not a valid combination for this store. */
      401: {
        content: {
        };
      };
      /** @description Missing scope - the v3 Auth token is valid but does not have proper permissions to access this endpoint. */
      403: {
        content: {
        };
      };
      /** @description Invalid JSON request body - missing or invalid data */
      422: {
        content: {
        };
      };
    };
  };
}
