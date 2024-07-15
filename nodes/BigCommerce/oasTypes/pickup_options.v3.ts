/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/pickup/options": {
    /**
     * Find Available Pickup Options
     * @description Returns up to 10 available pickup options for the requested items around a radius of the provided search coordinates.
     *
     * The pickup options returned only include options where all requested items are available and can be picked up from a single location.
     */
    post: operations["post-pickup-options"];
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
    PickupRequestPayload: {
      search_area: components["schemas"]["SearchArea"];
      /** @description Items you include in your search for pickup options. */
      items: components["schemas"]["Item"][];
    };
    /** @description Area where you are searching for pickup options. */
    SearchArea: {
      coordinates?: components["schemas"]["Coordinates"];
      /** @description Radius around the coordinates where you are searching for pickup options. */
      radius: {
        /** @example 10 */
        value: number;
        /** @enum {string} */
        unit: "KM" | "MI";
      };
    };
    /** @description Coordinates where you are searching for pickup options. */
    Coordinates: {
      /** @example 37.7749 */
      latitude: number;
      /** @example 122.4194 */
      longitude: number;
    };
    Item: {
      /** @example 24 */
      variant_id: number;
      /** @example 98 */
      quantity: number;
    };
    PickupOptionsResponse: {
      results?: {
          /** @description Pickup options for the available items. */
          pickup_options?: components["schemas"]["PickupOption"][];
        }[];
    };
    PickupOption: {
      pickup_method?: components["schemas"]["PickupMethod"];
      /** @description Items that are available using the pickup method. */
      available_items?: components["schemas"]["AvailableItem"][];
    };
    /** @description Pickup method that can be used with the available items. */
    PickupMethod: {
      /** @example 1 */
      id?: number;
      /** @example 2 */
      location_id?: number;
      /** @example Office Pickup! */
      display_name?: string;
      /** @example Bring your ID! */
      collection_instructions?: string;
      /** @example Collect during our opening hours of 0900 - 1700 */
      collection_time_description?: string;
    };
    AvailableItem: {
      /** @example 55 */
      variant_id?: number;
      /** @example 12 */
      quantity?: number;
    };
  };
  responses: never;
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
   * Find Available Pickup Options
   * @description Returns up to 10 available pickup options for the requested items around a radius of the provided search coordinates.
   *
   * The pickup options returned only include options where all requested items are available and can be picked up from a single location.
   */
  "post-pickup-options": {
    parameters: {
      header: {
        Accept: components["parameters"]["Accept"];
        "Content-Type": components["parameters"]["ContentType"];
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["PickupRequestPayload"];
      };
    };
    responses: {
      /** @description The request has been successfully processed. */
      200: {
        content: {
          "application/json": components["schemas"]["PickupOptionsResponse"];
        };
      };
    };
  };
}