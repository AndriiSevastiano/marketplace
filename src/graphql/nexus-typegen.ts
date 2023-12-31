/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * The `Upload` scalar type represents a file upload.
     */
    upload<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Upload";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * The `Upload` scalar type represents a file upload.
     */
    upload<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Upload";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Upload: any
}

export interface NexusGenObjects {
  Comment: { // root type
    body?: string | null; // String
    user: string; // String!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    CreatedAt?: string | null; // String
    UpdatedAt?: string | null; // String
    avatar?: string | null; // String
    email?: string | null; // String
    id?: number | null; // Int
    name?: string | null; // String
    password?: string | null; // String
    phone_number?: string | null; // String
    surname?: string | null; // String
  }
}

export interface NexusGenInterfaces {
  CommonFields: NexusGenRootTypes['User'];
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Comment: { // field return type
    body: string | null; // String
    user: string; // String!
  }
  Mutation: { // field return type
    createUser: NexusGenRootTypes['User']; // User!
  }
  Query: { // field return type
    hello: string | null; // String
  }
  User: { // field return type
    CreatedAt: string | null; // String
    UpdatedAt: string | null; // String
    avatar: string | null; // String
    email: string | null; // String
    id: number | null; // Int
    name: string | null; // String
    password: string | null; // String
    phone_number: string | null; // String
    surname: string | null; // String
  }
  CommonFields: { // field return type
    CreatedAt: string | null; // String
    UpdatedAt: string | null; // String
    id: number | null; // Int
  }
}

export interface NexusGenFieldTypeNames {
  Comment: { // field return type name
    body: 'String'
    user: 'String'
  }
  Mutation: { // field return type name
    createUser: 'User'
  }
  Query: { // field return type name
    hello: 'String'
  }
  User: { // field return type name
    CreatedAt: 'String'
    UpdatedAt: 'String'
    avatar: 'String'
    email: 'String'
    id: 'Int'
    name: 'String'
    password: 'String'
    phone_number: 'String'
    surname: 'String'
  }
  CommonFields: { // field return type name
    CreatedAt: 'String'
    UpdatedAt: 'String'
    id: 'Int'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createUser: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
      phone_number: string; // String!
      surname: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  CommonFields: "User"
}

export interface NexusGenTypeInterfaces {
  User: "CommonFields"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = "CommonFields";

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}