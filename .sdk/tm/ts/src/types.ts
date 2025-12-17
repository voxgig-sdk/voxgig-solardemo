
import { SolardemoSDK } from './SolardemoSDK'

import { Context } from './utility/ContextUtility'


type Operation = {
  kind: string
  entity: string
  name: string
  path: string
  pathalt: ({ path: string } & Record<string, boolean>)[],
  params: string[],
  alias: Record<string, string>
  state: Record<string, any>
  reqform: any
  resform: any
  validate: {
    params: Record<string, any>
  }
  check: Record<string, any>
}


type Spec = {
  headers: Record<string, string>
  alias: any
  base: string
  prefix: string
  suffix: string
  params: Record<string, string>
  query: Record<string, string>
  step: string
  method: string
  body: any
  path: string
  url?: string
}


type Response = {
  status: number,
  statusText: string,
  headers: any,
  json: Function,
  err?: Error,
}


type Result = {
  ok: boolean
  status: number
  statusText: string
  headers: Record<string, string>
  body?: any
  err?: any
  resdata?: any
  resmatch?: any
}


type Control = {
  throw?: boolean
  err?: any
  explain?: any
}


type FeatureOptions = Record<string, any> | {
  active: boolean
}


interface Feature {
  version: string
  name: string
  active: boolean

  init: (ctx: Context, options: FeatureOptions) => void | Promise<any>

  PostConstruct: (this: SolardemoSDK, ctx: Context) => void | Promise<any>
  PostConstructEntity: (this: SolardemoSDK, ctx: Context) => void | Promise<any>
  SetData: (this: SolardemoSDK, ctx: Context) => void | Promise<any>
  GetData: (this: SolardemoSDK, ctx: Context) => void | Promise<any>
  GetMatch: (this: SolardemoSDK, ctx: Context) => void | Promise<any>

  PreOperation: (this: SolardemoSDK, ctx: Context) => void | Promise<any>
  PreSpec: (this: SolardemoSDK, ctx: Context) => void | Promise<any>
  PreRequest: (this: SolardemoSDK, ctx: Context) => void | Promise<any>
  PreResponse: (this: SolardemoSDK, ctx: Context) => void | Promise<any>
  PreResult: (this: SolardemoSDK, ctx: Context) => void | Promise<any>
  PostOperation: (this: SolardemoSDK, ctx: Context) => void | Promise<any>
}



export type {
  Context,
  Operation,
  Spec,
  Control,
  FeatureOptions,
  Feature,
  Response,
  Result,
}
