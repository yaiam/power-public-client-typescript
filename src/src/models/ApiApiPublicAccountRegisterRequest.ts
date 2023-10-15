/* tslint:disable */
/* eslint-disable */
/**
 * Public API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ApiApiPublicAccountRegisterRequest
 */
export interface ApiApiPublicAccountRegisterRequest {
    /**
     * 
     * @type {string}
     * @memberof ApiApiPublicAccountRegisterRequest
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiApiPublicAccountRegisterRequest
     */
    password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApiApiPublicAccountRegisterRequest
     */
    passwordConfirmation?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ApiApiPublicAccountRegisterRequest
     */
    isPersistent?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApiApiPublicAccountRegisterRequest
     */
    loginRequestId?: string | null;
}

/**
 * Check if a given object implements the ApiApiPublicAccountRegisterRequest interface.
 */
export function instanceOfApiApiPublicAccountRegisterRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiApiPublicAccountRegisterRequestFromJSON(json: any): ApiApiPublicAccountRegisterRequest {
    return ApiApiPublicAccountRegisterRequestFromJSONTyped(json, false);
}

export function ApiApiPublicAccountRegisterRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiApiPublicAccountRegisterRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'passwordConfirmation': !exists(json, 'passwordConfirmation') ? undefined : json['passwordConfirmation'],
        'isPersistent': !exists(json, 'isPersistent') ? undefined : json['isPersistent'],
        'loginRequestId': !exists(json, 'loginRequestId') ? undefined : json['loginRequestId'],
    };
}

export function ApiApiPublicAccountRegisterRequestToJSON(value?: ApiApiPublicAccountRegisterRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'password': value.password,
        'passwordConfirmation': value.passwordConfirmation,
        'isPersistent': value.isPersistent,
        'loginRequestId': value.loginRequestId,
    };
}
