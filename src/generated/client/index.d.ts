
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model addon_categories
 * 
 */
export type addon_categories = {
  id: number
  name: string
  is_required: boolean
}

/**
 * Model addons
 * 
 */
export type addons = {
  id: number
  name: string
  addon_categories_id: number | null
}

/**
 * Model branches
 * 
 */
export type branches = {
  id: number
  township_id: number
  company_id: number
  address: string
}

/**
 * Model branches_addons
 * 
 */
export type branches_addons = {
  id: number
  addon_id: number
  branch_id: number
  is_available: boolean | null
}

/**
 * Model branches_menucategories_menus
 * 
 */
export type branches_menucategories_menus = {
  id: number
  menu_id: number | null
  branch_id: number
  menucategory_id: number
  is_available: boolean
}

/**
 * Model companies
 * 
 */
export type companies = {
  id: number
  name: string
}

/**
 * Model menu_categories
 * 
 */
export type menu_categories = {
  id: number
  name: string
}

/**
 * Model menus
 * 
 */
export type menus = {
  id: number
  name: string
  price: number
  asset_url: string | null
  description: string | null
}

/**
 * Model menu_addons
 * 
 */
export type menu_addons = {
  id: number
  menu_id: number
  addon_id: number
  price: number
}

/**
 * Model townships
 * 
 */
export type townships = {
  id: number
  name: string
}

/**
 * Model users
 * 
 */
export type users = {
  id: number
  name: string
  email: string
  password: string
  company_id: number
  role: Role
}


/**
 * Enums
 */

export const Role: {
  admin: 'admin',
  manager: 'manager'
};

export type Role = (typeof Role)[keyof typeof Role]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addon_categories
 * const addon_categories = await prisma.addon_categories.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Addon_categories
   * const addon_categories = await prisma.addon_categories.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.addon_categories`: Exposes CRUD operations for the **addon_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addon_categories
    * const addon_categories = await prisma.addon_categories.findMany()
    * ```
    */
  get addon_categories(): Prisma.addon_categoriesDelegate<GlobalReject>;

  /**
   * `prisma.addons`: Exposes CRUD operations for the **addons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addons
    * const addons = await prisma.addons.findMany()
    * ```
    */
  get addons(): Prisma.addonsDelegate<GlobalReject>;

  /**
   * `prisma.branches`: Exposes CRUD operations for the **branches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branches.findMany()
    * ```
    */
  get branches(): Prisma.branchesDelegate<GlobalReject>;

  /**
   * `prisma.branches_addons`: Exposes CRUD operations for the **branches_addons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches_addons
    * const branches_addons = await prisma.branches_addons.findMany()
    * ```
    */
  get branches_addons(): Prisma.branches_addonsDelegate<GlobalReject>;

  /**
   * `prisma.branches_menucategories_menus`: Exposes CRUD operations for the **branches_menucategories_menus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches_menucategories_menus
    * const branches_menucategories_menus = await prisma.branches_menucategories_menus.findMany()
    * ```
    */
  get branches_menucategories_menus(): Prisma.branches_menucategories_menusDelegate<GlobalReject>;

  /**
   * `prisma.companies`: Exposes CRUD operations for the **companies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.companies.findMany()
    * ```
    */
  get companies(): Prisma.companiesDelegate<GlobalReject>;

  /**
   * `prisma.menu_categories`: Exposes CRUD operations for the **menu_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menu_categories
    * const menu_categories = await prisma.menu_categories.findMany()
    * ```
    */
  get menu_categories(): Prisma.menu_categoriesDelegate<GlobalReject>;

  /**
   * `prisma.menus`: Exposes CRUD operations for the **menus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menus.findMany()
    * ```
    */
  get menus(): Prisma.menusDelegate<GlobalReject>;

  /**
   * `prisma.menu_addons`: Exposes CRUD operations for the **menu_addons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menu_addons
    * const menu_addons = await prisma.menu_addons.findMany()
    * ```
    */
  get menu_addons(): Prisma.menu_addonsDelegate<GlobalReject>;

  /**
   * `prisma.townships`: Exposes CRUD operations for the **townships** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Townships
    * const townships = await prisma.townships.findMany()
    * ```
    */
  get townships(): Prisma.townshipsDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    addon_categories: 'addon_categories',
    addons: 'addons',
    branches: 'branches',
    branches_addons: 'branches_addons',
    branches_menucategories_menus: 'branches_menucategories_menus',
    companies: 'companies',
    menu_categories: 'menu_categories',
    menus: 'menus',
    menu_addons: 'menu_addons',
    townships: 'townships',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Addon_categoriesCountOutputType
   */


  export type Addon_categoriesCountOutputType = {
    menu_addons: number
  }

  export type Addon_categoriesCountOutputTypeSelect = {
    menu_addons?: boolean
  }

  export type Addon_categoriesCountOutputTypeGetPayload<S extends boolean | null | undefined | Addon_categoriesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Addon_categoriesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Addon_categoriesCountOutputTypeArgs)
    ? Addon_categoriesCountOutputType 
    : S extends { select: any } & (Addon_categoriesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Addon_categoriesCountOutputType ? Addon_categoriesCountOutputType[P] : never
  } 
      : Addon_categoriesCountOutputType




  // Custom InputTypes

  /**
   * Addon_categoriesCountOutputType without action
   */
  export type Addon_categoriesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Addon_categoriesCountOutputType
     */
    select?: Addon_categoriesCountOutputTypeSelect | null
  }



  /**
   * Count Type AddonsCountOutputType
   */


  export type AddonsCountOutputType = {
    branches_addons: number
    menu_addons: number
  }

  export type AddonsCountOutputTypeSelect = {
    branches_addons?: boolean
    menu_addons?: boolean
  }

  export type AddonsCountOutputTypeGetPayload<S extends boolean | null | undefined | AddonsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AddonsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AddonsCountOutputTypeArgs)
    ? AddonsCountOutputType 
    : S extends { select: any } & (AddonsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AddonsCountOutputType ? AddonsCountOutputType[P] : never
  } 
      : AddonsCountOutputType




  // Custom InputTypes

  /**
   * AddonsCountOutputType without action
   */
  export type AddonsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AddonsCountOutputType
     */
    select?: AddonsCountOutputTypeSelect | null
  }



  /**
   * Count Type BranchesCountOutputType
   */


  export type BranchesCountOutputType = {
    branches_addons: number
    branches_menucategories_menus: number
  }

  export type BranchesCountOutputTypeSelect = {
    branches_addons?: boolean
    branches_menucategories_menus?: boolean
  }

  export type BranchesCountOutputTypeGetPayload<S extends boolean | null | undefined | BranchesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BranchesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BranchesCountOutputTypeArgs)
    ? BranchesCountOutputType 
    : S extends { select: any } & (BranchesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BranchesCountOutputType ? BranchesCountOutputType[P] : never
  } 
      : BranchesCountOutputType




  // Custom InputTypes

  /**
   * BranchesCountOutputType without action
   */
  export type BranchesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BranchesCountOutputType
     */
    select?: BranchesCountOutputTypeSelect | null
  }



  /**
   * Count Type CompaniesCountOutputType
   */


  export type CompaniesCountOutputType = {
    branches: number
    users: number
  }

  export type CompaniesCountOutputTypeSelect = {
    branches?: boolean
    users?: boolean
  }

  export type CompaniesCountOutputTypeGetPayload<S extends boolean | null | undefined | CompaniesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CompaniesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CompaniesCountOutputTypeArgs)
    ? CompaniesCountOutputType 
    : S extends { select: any } & (CompaniesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CompaniesCountOutputType ? CompaniesCountOutputType[P] : never
  } 
      : CompaniesCountOutputType




  // Custom InputTypes

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CompaniesCountOutputType
     */
    select?: CompaniesCountOutputTypeSelect | null
  }



  /**
   * Count Type Menu_categoriesCountOutputType
   */


  export type Menu_categoriesCountOutputType = {
    branches_menucategories_menus: number
  }

  export type Menu_categoriesCountOutputTypeSelect = {
    branches_menucategories_menus?: boolean
  }

  export type Menu_categoriesCountOutputTypeGetPayload<S extends boolean | null | undefined | Menu_categoriesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Menu_categoriesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Menu_categoriesCountOutputTypeArgs)
    ? Menu_categoriesCountOutputType 
    : S extends { select: any } & (Menu_categoriesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Menu_categoriesCountOutputType ? Menu_categoriesCountOutputType[P] : never
  } 
      : Menu_categoriesCountOutputType




  // Custom InputTypes

  /**
   * Menu_categoriesCountOutputType without action
   */
  export type Menu_categoriesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Menu_categoriesCountOutputType
     */
    select?: Menu_categoriesCountOutputTypeSelect | null
  }



  /**
   * Count Type MenusCountOutputType
   */


  export type MenusCountOutputType = {
    branches_menucategories_menus: number
    menus_addoncats_addons: number
  }

  export type MenusCountOutputTypeSelect = {
    branches_menucategories_menus?: boolean
    menus_addoncats_addons?: boolean
  }

  export type MenusCountOutputTypeGetPayload<S extends boolean | null | undefined | MenusCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MenusCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (MenusCountOutputTypeArgs)
    ? MenusCountOutputType 
    : S extends { select: any } & (MenusCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof MenusCountOutputType ? MenusCountOutputType[P] : never
  } 
      : MenusCountOutputType




  // Custom InputTypes

  /**
   * MenusCountOutputType without action
   */
  export type MenusCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MenusCountOutputType
     */
    select?: MenusCountOutputTypeSelect | null
  }



  /**
   * Count Type Menu_addonsCountOutputType
   */


  export type Menu_addonsCountOutputType = {
    addon_categories: number
  }

  export type Menu_addonsCountOutputTypeSelect = {
    addon_categories?: boolean
  }

  export type Menu_addonsCountOutputTypeGetPayload<S extends boolean | null | undefined | Menu_addonsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Menu_addonsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (Menu_addonsCountOutputTypeArgs)
    ? Menu_addonsCountOutputType 
    : S extends { select: any } & (Menu_addonsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Menu_addonsCountOutputType ? Menu_addonsCountOutputType[P] : never
  } 
      : Menu_addonsCountOutputType




  // Custom InputTypes

  /**
   * Menu_addonsCountOutputType without action
   */
  export type Menu_addonsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the Menu_addonsCountOutputType
     */
    select?: Menu_addonsCountOutputTypeSelect | null
  }



  /**
   * Count Type TownshipsCountOutputType
   */


  export type TownshipsCountOutputType = {
    branches: number
  }

  export type TownshipsCountOutputTypeSelect = {
    branches?: boolean
  }

  export type TownshipsCountOutputTypeGetPayload<S extends boolean | null | undefined | TownshipsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TownshipsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TownshipsCountOutputTypeArgs)
    ? TownshipsCountOutputType 
    : S extends { select: any } & (TownshipsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TownshipsCountOutputType ? TownshipsCountOutputType[P] : never
  } 
      : TownshipsCountOutputType




  // Custom InputTypes

  /**
   * TownshipsCountOutputType without action
   */
  export type TownshipsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TownshipsCountOutputType
     */
    select?: TownshipsCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model addon_categories
   */


  export type AggregateAddon_categories = {
    _count: Addon_categoriesCountAggregateOutputType | null
    _avg: Addon_categoriesAvgAggregateOutputType | null
    _sum: Addon_categoriesSumAggregateOutputType | null
    _min: Addon_categoriesMinAggregateOutputType | null
    _max: Addon_categoriesMaxAggregateOutputType | null
  }

  export type Addon_categoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type Addon_categoriesSumAggregateOutputType = {
    id: number | null
  }

  export type Addon_categoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    is_required: boolean | null
  }

  export type Addon_categoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    is_required: boolean | null
  }

  export type Addon_categoriesCountAggregateOutputType = {
    id: number
    name: number
    is_required: number
    _all: number
  }


  export type Addon_categoriesAvgAggregateInputType = {
    id?: true
  }

  export type Addon_categoriesSumAggregateInputType = {
    id?: true
  }

  export type Addon_categoriesMinAggregateInputType = {
    id?: true
    name?: true
    is_required?: true
  }

  export type Addon_categoriesMaxAggregateInputType = {
    id?: true
    name?: true
    is_required?: true
  }

  export type Addon_categoriesCountAggregateInputType = {
    id?: true
    name?: true
    is_required?: true
    _all?: true
  }

  export type Addon_categoriesAggregateArgs = {
    /**
     * Filter which addon_categories to aggregate.
     */
    where?: addon_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addon_categories to fetch.
     */
    orderBy?: Enumerable<addon_categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addon_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addon_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addon_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addon_categories
    **/
    _count?: true | Addon_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Addon_categoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Addon_categoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Addon_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Addon_categoriesMaxAggregateInputType
  }

  export type GetAddon_categoriesAggregateType<T extends Addon_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateAddon_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddon_categories[P]>
      : GetScalarType<T[P], AggregateAddon_categories[P]>
  }




  export type Addon_categoriesGroupByArgs = {
    where?: addon_categoriesWhereInput
    orderBy?: Enumerable<addon_categoriesOrderByWithAggregationInput>
    by: Addon_categoriesScalarFieldEnum[]
    having?: addon_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Addon_categoriesCountAggregateInputType | true
    _avg?: Addon_categoriesAvgAggregateInputType
    _sum?: Addon_categoriesSumAggregateInputType
    _min?: Addon_categoriesMinAggregateInputType
    _max?: Addon_categoriesMaxAggregateInputType
  }


  export type Addon_categoriesGroupByOutputType = {
    id: number
    name: string
    is_required: boolean
    _count: Addon_categoriesCountAggregateOutputType | null
    _avg: Addon_categoriesAvgAggregateOutputType | null
    _sum: Addon_categoriesSumAggregateOutputType | null
    _min: Addon_categoriesMinAggregateOutputType | null
    _max: Addon_categoriesMaxAggregateOutputType | null
  }

  type GetAddon_categoriesGroupByPayload<T extends Addon_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Addon_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Addon_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Addon_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Addon_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type addon_categoriesSelect = {
    id?: boolean
    name?: boolean
    is_required?: boolean
    menu_addons?: boolean | addon_categories$menu_addonsArgs
    _count?: boolean | Addon_categoriesCountOutputTypeArgs
  }


  export type addon_categoriesInclude = {
    menu_addons?: boolean | addon_categories$menu_addonsArgs
    _count?: boolean | Addon_categoriesCountOutputTypeArgs
  }

  export type addon_categoriesGetPayload<S extends boolean | null | undefined | addon_categoriesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? addon_categories :
    S extends undefined ? never :
    S extends { include: any } & (addon_categoriesArgs | addon_categoriesFindManyArgs)
    ? addon_categories  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'menu_addons' ? Array < menu_addonsGetPayload<S['include'][P]>>  :
        P extends '_count' ? Addon_categoriesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (addon_categoriesArgs | addon_categoriesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'menu_addons' ? Array < menu_addonsGetPayload<S['select'][P]>>  :
        P extends '_count' ? Addon_categoriesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof addon_categories ? addon_categories[P] : never
  } 
      : addon_categories


  type addon_categoriesCountArgs = 
    Omit<addon_categoriesFindManyArgs, 'select' | 'include'> & {
      select?: Addon_categoriesCountAggregateInputType | true
    }

  export interface addon_categoriesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Addon_categories that matches the filter.
     * @param {addon_categoriesFindUniqueArgs} args - Arguments to find a Addon_categories
     * @example
     * // Get one Addon_categories
     * const addon_categories = await prisma.addon_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends addon_categoriesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, addon_categoriesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'addon_categories'> extends True ? Prisma__addon_categoriesClient<addon_categoriesGetPayload<T>> : Prisma__addon_categoriesClient<addon_categoriesGetPayload<T> | null, null>

    /**
     * Find one Addon_categories that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {addon_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Addon_categories
     * @example
     * // Get one Addon_categories
     * const addon_categories = await prisma.addon_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends addon_categoriesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, addon_categoriesFindUniqueOrThrowArgs>
    ): Prisma__addon_categoriesClient<addon_categoriesGetPayload<T>>

    /**
     * Find the first Addon_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addon_categoriesFindFirstArgs} args - Arguments to find a Addon_categories
     * @example
     * // Get one Addon_categories
     * const addon_categories = await prisma.addon_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends addon_categoriesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, addon_categoriesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'addon_categories'> extends True ? Prisma__addon_categoriesClient<addon_categoriesGetPayload<T>> : Prisma__addon_categoriesClient<addon_categoriesGetPayload<T> | null, null>

    /**
     * Find the first Addon_categories that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addon_categoriesFindFirstOrThrowArgs} args - Arguments to find a Addon_categories
     * @example
     * // Get one Addon_categories
     * const addon_categories = await prisma.addon_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends addon_categoriesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, addon_categoriesFindFirstOrThrowArgs>
    ): Prisma__addon_categoriesClient<addon_categoriesGetPayload<T>>

    /**
     * Find zero or more Addon_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addon_categoriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addon_categories
     * const addon_categories = await prisma.addon_categories.findMany()
     * 
     * // Get first 10 Addon_categories
     * const addon_categories = await prisma.addon_categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addon_categoriesWithIdOnly = await prisma.addon_categories.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends addon_categoriesFindManyArgs>(
      args?: SelectSubset<T, addon_categoriesFindManyArgs>
    ): Prisma.PrismaPromise<Array<addon_categoriesGetPayload<T>>>

    /**
     * Create a Addon_categories.
     * @param {addon_categoriesCreateArgs} args - Arguments to create a Addon_categories.
     * @example
     * // Create one Addon_categories
     * const Addon_categories = await prisma.addon_categories.create({
     *   data: {
     *     // ... data to create a Addon_categories
     *   }
     * })
     * 
    **/
    create<T extends addon_categoriesCreateArgs>(
      args: SelectSubset<T, addon_categoriesCreateArgs>
    ): Prisma__addon_categoriesClient<addon_categoriesGetPayload<T>>

    /**
     * Create many Addon_categories.
     *     @param {addon_categoriesCreateManyArgs} args - Arguments to create many Addon_categories.
     *     @example
     *     // Create many Addon_categories
     *     const addon_categories = await prisma.addon_categories.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends addon_categoriesCreateManyArgs>(
      args?: SelectSubset<T, addon_categoriesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Addon_categories.
     * @param {addon_categoriesDeleteArgs} args - Arguments to delete one Addon_categories.
     * @example
     * // Delete one Addon_categories
     * const Addon_categories = await prisma.addon_categories.delete({
     *   where: {
     *     // ... filter to delete one Addon_categories
     *   }
     * })
     * 
    **/
    delete<T extends addon_categoriesDeleteArgs>(
      args: SelectSubset<T, addon_categoriesDeleteArgs>
    ): Prisma__addon_categoriesClient<addon_categoriesGetPayload<T>>

    /**
     * Update one Addon_categories.
     * @param {addon_categoriesUpdateArgs} args - Arguments to update one Addon_categories.
     * @example
     * // Update one Addon_categories
     * const addon_categories = await prisma.addon_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends addon_categoriesUpdateArgs>(
      args: SelectSubset<T, addon_categoriesUpdateArgs>
    ): Prisma__addon_categoriesClient<addon_categoriesGetPayload<T>>

    /**
     * Delete zero or more Addon_categories.
     * @param {addon_categoriesDeleteManyArgs} args - Arguments to filter Addon_categories to delete.
     * @example
     * // Delete a few Addon_categories
     * const { count } = await prisma.addon_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends addon_categoriesDeleteManyArgs>(
      args?: SelectSubset<T, addon_categoriesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addon_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addon_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addon_categories
     * const addon_categories = await prisma.addon_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends addon_categoriesUpdateManyArgs>(
      args: SelectSubset<T, addon_categoriesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Addon_categories.
     * @param {addon_categoriesUpsertArgs} args - Arguments to update or create a Addon_categories.
     * @example
     * // Update or create a Addon_categories
     * const addon_categories = await prisma.addon_categories.upsert({
     *   create: {
     *     // ... data to create a Addon_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Addon_categories we want to update
     *   }
     * })
    **/
    upsert<T extends addon_categoriesUpsertArgs>(
      args: SelectSubset<T, addon_categoriesUpsertArgs>
    ): Prisma__addon_categoriesClient<addon_categoriesGetPayload<T>>

    /**
     * Count the number of Addon_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addon_categoriesCountArgs} args - Arguments to filter Addon_categories to count.
     * @example
     * // Count the number of Addon_categories
     * const count = await prisma.addon_categories.count({
     *   where: {
     *     // ... the filter for the Addon_categories we want to count
     *   }
     * })
    **/
    count<T extends addon_categoriesCountArgs>(
      args?: Subset<T, addon_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Addon_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Addon_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Addon_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Addon_categoriesAggregateArgs>(args: Subset<T, Addon_categoriesAggregateArgs>): Prisma.PrismaPromise<GetAddon_categoriesAggregateType<T>>

    /**
     * Group by Addon_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Addon_categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Addon_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Addon_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: Addon_categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Addon_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddon_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for addon_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__addon_categoriesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    menu_addons<T extends addon_categories$menu_addonsArgs= {}>(args?: Subset<T, addon_categories$menu_addonsArgs>): Prisma.PrismaPromise<Array<menu_addonsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * addon_categories base type for findUnique actions
   */
  export type addon_categoriesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the addon_categories
     */
    select?: addon_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addon_categoriesInclude | null
    /**
     * Filter, which addon_categories to fetch.
     */
    where: addon_categoriesWhereUniqueInput
  }

  /**
   * addon_categories findUnique
   */
  export interface addon_categoriesFindUniqueArgs extends addon_categoriesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * addon_categories findUniqueOrThrow
   */
  export type addon_categoriesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the addon_categories
     */
    select?: addon_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addon_categoriesInclude | null
    /**
     * Filter, which addon_categories to fetch.
     */
    where: addon_categoriesWhereUniqueInput
  }


  /**
   * addon_categories base type for findFirst actions
   */
  export type addon_categoriesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the addon_categories
     */
    select?: addon_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addon_categoriesInclude | null
    /**
     * Filter, which addon_categories to fetch.
     */
    where?: addon_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addon_categories to fetch.
     */
    orderBy?: Enumerable<addon_categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addon_categories.
     */
    cursor?: addon_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addon_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addon_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addon_categories.
     */
    distinct?: Enumerable<Addon_categoriesScalarFieldEnum>
  }

  /**
   * addon_categories findFirst
   */
  export interface addon_categoriesFindFirstArgs extends addon_categoriesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * addon_categories findFirstOrThrow
   */
  export type addon_categoriesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the addon_categories
     */
    select?: addon_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addon_categoriesInclude | null
    /**
     * Filter, which addon_categories to fetch.
     */
    where?: addon_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addon_categories to fetch.
     */
    orderBy?: Enumerable<addon_categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addon_categories.
     */
    cursor?: addon_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addon_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addon_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addon_categories.
     */
    distinct?: Enumerable<Addon_categoriesScalarFieldEnum>
  }


  /**
   * addon_categories findMany
   */
  export type addon_categoriesFindManyArgs = {
    /**
     * Select specific fields to fetch from the addon_categories
     */
    select?: addon_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addon_categoriesInclude | null
    /**
     * Filter, which addon_categories to fetch.
     */
    where?: addon_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addon_categories to fetch.
     */
    orderBy?: Enumerable<addon_categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addon_categories.
     */
    cursor?: addon_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addon_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addon_categories.
     */
    skip?: number
    distinct?: Enumerable<Addon_categoriesScalarFieldEnum>
  }


  /**
   * addon_categories create
   */
  export type addon_categoriesCreateArgs = {
    /**
     * Select specific fields to fetch from the addon_categories
     */
    select?: addon_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addon_categoriesInclude | null
    /**
     * The data needed to create a addon_categories.
     */
    data: XOR<addon_categoriesCreateInput, addon_categoriesUncheckedCreateInput>
  }


  /**
   * addon_categories createMany
   */
  export type addon_categoriesCreateManyArgs = {
    /**
     * The data used to create many addon_categories.
     */
    data: Enumerable<addon_categoriesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * addon_categories update
   */
  export type addon_categoriesUpdateArgs = {
    /**
     * Select specific fields to fetch from the addon_categories
     */
    select?: addon_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addon_categoriesInclude | null
    /**
     * The data needed to update a addon_categories.
     */
    data: XOR<addon_categoriesUpdateInput, addon_categoriesUncheckedUpdateInput>
    /**
     * Choose, which addon_categories to update.
     */
    where: addon_categoriesWhereUniqueInput
  }


  /**
   * addon_categories updateMany
   */
  export type addon_categoriesUpdateManyArgs = {
    /**
     * The data used to update addon_categories.
     */
    data: XOR<addon_categoriesUpdateManyMutationInput, addon_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which addon_categories to update
     */
    where?: addon_categoriesWhereInput
  }


  /**
   * addon_categories upsert
   */
  export type addon_categoriesUpsertArgs = {
    /**
     * Select specific fields to fetch from the addon_categories
     */
    select?: addon_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addon_categoriesInclude | null
    /**
     * The filter to search for the addon_categories to update in case it exists.
     */
    where: addon_categoriesWhereUniqueInput
    /**
     * In case the addon_categories found by the `where` argument doesn't exist, create a new addon_categories with this data.
     */
    create: XOR<addon_categoriesCreateInput, addon_categoriesUncheckedCreateInput>
    /**
     * In case the addon_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addon_categoriesUpdateInput, addon_categoriesUncheckedUpdateInput>
  }


  /**
   * addon_categories delete
   */
  export type addon_categoriesDeleteArgs = {
    /**
     * Select specific fields to fetch from the addon_categories
     */
    select?: addon_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addon_categoriesInclude | null
    /**
     * Filter which addon_categories to delete.
     */
    where: addon_categoriesWhereUniqueInput
  }


  /**
   * addon_categories deleteMany
   */
  export type addon_categoriesDeleteManyArgs = {
    /**
     * Filter which addon_categories to delete
     */
    where?: addon_categoriesWhereInput
  }


  /**
   * addon_categories.menu_addons
   */
  export type addon_categories$menu_addonsArgs = {
    /**
     * Select specific fields to fetch from the menu_addons
     */
    select?: menu_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_addonsInclude | null
    where?: menu_addonsWhereInput
    orderBy?: Enumerable<menu_addonsOrderByWithRelationInput>
    cursor?: menu_addonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Menu_addonsScalarFieldEnum>
  }


  /**
   * addon_categories without action
   */
  export type addon_categoriesArgs = {
    /**
     * Select specific fields to fetch from the addon_categories
     */
    select?: addon_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addon_categoriesInclude | null
  }



  /**
   * Model addons
   */


  export type AggregateAddons = {
    _count: AddonsCountAggregateOutputType | null
    _avg: AddonsAvgAggregateOutputType | null
    _sum: AddonsSumAggregateOutputType | null
    _min: AddonsMinAggregateOutputType | null
    _max: AddonsMaxAggregateOutputType | null
  }

  export type AddonsAvgAggregateOutputType = {
    id: number | null
    addon_categories_id: number | null
  }

  export type AddonsSumAggregateOutputType = {
    id: number | null
    addon_categories_id: number | null
  }

  export type AddonsMinAggregateOutputType = {
    id: number | null
    name: string | null
    addon_categories_id: number | null
  }

  export type AddonsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    addon_categories_id: number | null
  }

  export type AddonsCountAggregateOutputType = {
    id: number
    name: number
    addon_categories_id: number
    _all: number
  }


  export type AddonsAvgAggregateInputType = {
    id?: true
    addon_categories_id?: true
  }

  export type AddonsSumAggregateInputType = {
    id?: true
    addon_categories_id?: true
  }

  export type AddonsMinAggregateInputType = {
    id?: true
    name?: true
    addon_categories_id?: true
  }

  export type AddonsMaxAggregateInputType = {
    id?: true
    name?: true
    addon_categories_id?: true
  }

  export type AddonsCountAggregateInputType = {
    id?: true
    name?: true
    addon_categories_id?: true
    _all?: true
  }

  export type AddonsAggregateArgs = {
    /**
     * Filter which addons to aggregate.
     */
    where?: addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addons to fetch.
     */
    orderBy?: Enumerable<addonsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addons
    **/
    _count?: true | AddonsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddonsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddonsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddonsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddonsMaxAggregateInputType
  }

  export type GetAddonsAggregateType<T extends AddonsAggregateArgs> = {
        [P in keyof T & keyof AggregateAddons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddons[P]>
      : GetScalarType<T[P], AggregateAddons[P]>
  }




  export type AddonsGroupByArgs = {
    where?: addonsWhereInput
    orderBy?: Enumerable<addonsOrderByWithAggregationInput>
    by: AddonsScalarFieldEnum[]
    having?: addonsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddonsCountAggregateInputType | true
    _avg?: AddonsAvgAggregateInputType
    _sum?: AddonsSumAggregateInputType
    _min?: AddonsMinAggregateInputType
    _max?: AddonsMaxAggregateInputType
  }


  export type AddonsGroupByOutputType = {
    id: number
    name: string
    addon_categories_id: number | null
    _count: AddonsCountAggregateOutputType | null
    _avg: AddonsAvgAggregateOutputType | null
    _sum: AddonsSumAggregateOutputType | null
    _min: AddonsMinAggregateOutputType | null
    _max: AddonsMaxAggregateOutputType | null
  }

  type GetAddonsGroupByPayload<T extends AddonsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AddonsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddonsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddonsGroupByOutputType[P]>
            : GetScalarType<T[P], AddonsGroupByOutputType[P]>
        }
      >
    >


  export type addonsSelect = {
    id?: boolean
    name?: boolean
    addon_categories_id?: boolean
    branches_addons?: boolean | addons$branches_addonsArgs
    menu_addons?: boolean | addons$menu_addonsArgs
    _count?: boolean | AddonsCountOutputTypeArgs
  }


  export type addonsInclude = {
    branches_addons?: boolean | addons$branches_addonsArgs
    menu_addons?: boolean | addons$menu_addonsArgs
    _count?: boolean | AddonsCountOutputTypeArgs
  }

  export type addonsGetPayload<S extends boolean | null | undefined | addonsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? addons :
    S extends undefined ? never :
    S extends { include: any } & (addonsArgs | addonsFindManyArgs)
    ? addons  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'branches_addons' ? Array < branches_addonsGetPayload<S['include'][P]>>  :
        P extends 'menu_addons' ? Array < menu_addonsGetPayload<S['include'][P]>>  :
        P extends '_count' ? AddonsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (addonsArgs | addonsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'branches_addons' ? Array < branches_addonsGetPayload<S['select'][P]>>  :
        P extends 'menu_addons' ? Array < menu_addonsGetPayload<S['select'][P]>>  :
        P extends '_count' ? AddonsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof addons ? addons[P] : never
  } 
      : addons


  type addonsCountArgs = 
    Omit<addonsFindManyArgs, 'select' | 'include'> & {
      select?: AddonsCountAggregateInputType | true
    }

  export interface addonsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Addons that matches the filter.
     * @param {addonsFindUniqueArgs} args - Arguments to find a Addons
     * @example
     * // Get one Addons
     * const addons = await prisma.addons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends addonsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, addonsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'addons'> extends True ? Prisma__addonsClient<addonsGetPayload<T>> : Prisma__addonsClient<addonsGetPayload<T> | null, null>

    /**
     * Find one Addons that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {addonsFindUniqueOrThrowArgs} args - Arguments to find a Addons
     * @example
     * // Get one Addons
     * const addons = await prisma.addons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends addonsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, addonsFindUniqueOrThrowArgs>
    ): Prisma__addonsClient<addonsGetPayload<T>>

    /**
     * Find the first Addons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addonsFindFirstArgs} args - Arguments to find a Addons
     * @example
     * // Get one Addons
     * const addons = await prisma.addons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends addonsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, addonsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'addons'> extends True ? Prisma__addonsClient<addonsGetPayload<T>> : Prisma__addonsClient<addonsGetPayload<T> | null, null>

    /**
     * Find the first Addons that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addonsFindFirstOrThrowArgs} args - Arguments to find a Addons
     * @example
     * // Get one Addons
     * const addons = await prisma.addons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends addonsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, addonsFindFirstOrThrowArgs>
    ): Prisma__addonsClient<addonsGetPayload<T>>

    /**
     * Find zero or more Addons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addonsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addons
     * const addons = await prisma.addons.findMany()
     * 
     * // Get first 10 Addons
     * const addons = await prisma.addons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addonsWithIdOnly = await prisma.addons.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends addonsFindManyArgs>(
      args?: SelectSubset<T, addonsFindManyArgs>
    ): Prisma.PrismaPromise<Array<addonsGetPayload<T>>>

    /**
     * Create a Addons.
     * @param {addonsCreateArgs} args - Arguments to create a Addons.
     * @example
     * // Create one Addons
     * const Addons = await prisma.addons.create({
     *   data: {
     *     // ... data to create a Addons
     *   }
     * })
     * 
    **/
    create<T extends addonsCreateArgs>(
      args: SelectSubset<T, addonsCreateArgs>
    ): Prisma__addonsClient<addonsGetPayload<T>>

    /**
     * Create many Addons.
     *     @param {addonsCreateManyArgs} args - Arguments to create many Addons.
     *     @example
     *     // Create many Addons
     *     const addons = await prisma.addons.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends addonsCreateManyArgs>(
      args?: SelectSubset<T, addonsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Addons.
     * @param {addonsDeleteArgs} args - Arguments to delete one Addons.
     * @example
     * // Delete one Addons
     * const Addons = await prisma.addons.delete({
     *   where: {
     *     // ... filter to delete one Addons
     *   }
     * })
     * 
    **/
    delete<T extends addonsDeleteArgs>(
      args: SelectSubset<T, addonsDeleteArgs>
    ): Prisma__addonsClient<addonsGetPayload<T>>

    /**
     * Update one Addons.
     * @param {addonsUpdateArgs} args - Arguments to update one Addons.
     * @example
     * // Update one Addons
     * const addons = await prisma.addons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends addonsUpdateArgs>(
      args: SelectSubset<T, addonsUpdateArgs>
    ): Prisma__addonsClient<addonsGetPayload<T>>

    /**
     * Delete zero or more Addons.
     * @param {addonsDeleteManyArgs} args - Arguments to filter Addons to delete.
     * @example
     * // Delete a few Addons
     * const { count } = await prisma.addons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends addonsDeleteManyArgs>(
      args?: SelectSubset<T, addonsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addonsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addons
     * const addons = await prisma.addons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends addonsUpdateManyArgs>(
      args: SelectSubset<T, addonsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Addons.
     * @param {addonsUpsertArgs} args - Arguments to update or create a Addons.
     * @example
     * // Update or create a Addons
     * const addons = await prisma.addons.upsert({
     *   create: {
     *     // ... data to create a Addons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Addons we want to update
     *   }
     * })
    **/
    upsert<T extends addonsUpsertArgs>(
      args: SelectSubset<T, addonsUpsertArgs>
    ): Prisma__addonsClient<addonsGetPayload<T>>

    /**
     * Count the number of Addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addonsCountArgs} args - Arguments to filter Addons to count.
     * @example
     * // Count the number of Addons
     * const count = await prisma.addons.count({
     *   where: {
     *     // ... the filter for the Addons we want to count
     *   }
     * })
    **/
    count<T extends addonsCountArgs>(
      args?: Subset<T, addonsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddonsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddonsAggregateArgs>(args: Subset<T, AddonsAggregateArgs>): Prisma.PrismaPromise<GetAddonsAggregateType<T>>

    /**
     * Group by Addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddonsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddonsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddonsGroupByArgs['orderBy'] }
        : { orderBy?: AddonsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddonsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddonsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for addons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__addonsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    branches_addons<T extends addons$branches_addonsArgs= {}>(args?: Subset<T, addons$branches_addonsArgs>): Prisma.PrismaPromise<Array<branches_addonsGetPayload<T>>| Null>;

    menu_addons<T extends addons$menu_addonsArgs= {}>(args?: Subset<T, addons$menu_addonsArgs>): Prisma.PrismaPromise<Array<menu_addonsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * addons base type for findUnique actions
   */
  export type addonsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addonsInclude | null
    /**
     * Filter, which addons to fetch.
     */
    where: addonsWhereUniqueInput
  }

  /**
   * addons findUnique
   */
  export interface addonsFindUniqueArgs extends addonsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * addons findUniqueOrThrow
   */
  export type addonsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addonsInclude | null
    /**
     * Filter, which addons to fetch.
     */
    where: addonsWhereUniqueInput
  }


  /**
   * addons base type for findFirst actions
   */
  export type addonsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addonsInclude | null
    /**
     * Filter, which addons to fetch.
     */
    where?: addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addons to fetch.
     */
    orderBy?: Enumerable<addonsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addons.
     */
    cursor?: addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addons.
     */
    distinct?: Enumerable<AddonsScalarFieldEnum>
  }

  /**
   * addons findFirst
   */
  export interface addonsFindFirstArgs extends addonsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * addons findFirstOrThrow
   */
  export type addonsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addonsInclude | null
    /**
     * Filter, which addons to fetch.
     */
    where?: addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addons to fetch.
     */
    orderBy?: Enumerable<addonsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addons.
     */
    cursor?: addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addons.
     */
    distinct?: Enumerable<AddonsScalarFieldEnum>
  }


  /**
   * addons findMany
   */
  export type addonsFindManyArgs = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addonsInclude | null
    /**
     * Filter, which addons to fetch.
     */
    where?: addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addons to fetch.
     */
    orderBy?: Enumerable<addonsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addons.
     */
    cursor?: addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addons.
     */
    skip?: number
    distinct?: Enumerable<AddonsScalarFieldEnum>
  }


  /**
   * addons create
   */
  export type addonsCreateArgs = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addonsInclude | null
    /**
     * The data needed to create a addons.
     */
    data: XOR<addonsCreateInput, addonsUncheckedCreateInput>
  }


  /**
   * addons createMany
   */
  export type addonsCreateManyArgs = {
    /**
     * The data used to create many addons.
     */
    data: Enumerable<addonsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * addons update
   */
  export type addonsUpdateArgs = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addonsInclude | null
    /**
     * The data needed to update a addons.
     */
    data: XOR<addonsUpdateInput, addonsUncheckedUpdateInput>
    /**
     * Choose, which addons to update.
     */
    where: addonsWhereUniqueInput
  }


  /**
   * addons updateMany
   */
  export type addonsUpdateManyArgs = {
    /**
     * The data used to update addons.
     */
    data: XOR<addonsUpdateManyMutationInput, addonsUncheckedUpdateManyInput>
    /**
     * Filter which addons to update
     */
    where?: addonsWhereInput
  }


  /**
   * addons upsert
   */
  export type addonsUpsertArgs = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addonsInclude | null
    /**
     * The filter to search for the addons to update in case it exists.
     */
    where: addonsWhereUniqueInput
    /**
     * In case the addons found by the `where` argument doesn't exist, create a new addons with this data.
     */
    create: XOR<addonsCreateInput, addonsUncheckedCreateInput>
    /**
     * In case the addons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addonsUpdateInput, addonsUncheckedUpdateInput>
  }


  /**
   * addons delete
   */
  export type addonsDeleteArgs = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addonsInclude | null
    /**
     * Filter which addons to delete.
     */
    where: addonsWhereUniqueInput
  }


  /**
   * addons deleteMany
   */
  export type addonsDeleteManyArgs = {
    /**
     * Filter which addons to delete
     */
    where?: addonsWhereInput
  }


  /**
   * addons.branches_addons
   */
  export type addons$branches_addonsArgs = {
    /**
     * Select specific fields to fetch from the branches_addons
     */
    select?: branches_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_addonsInclude | null
    where?: branches_addonsWhereInput
    orderBy?: Enumerable<branches_addonsOrderByWithRelationInput>
    cursor?: branches_addonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Branches_addonsScalarFieldEnum>
  }


  /**
   * addons.menu_addons
   */
  export type addons$menu_addonsArgs = {
    /**
     * Select specific fields to fetch from the menu_addons
     */
    select?: menu_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_addonsInclude | null
    where?: menu_addonsWhereInput
    orderBy?: Enumerable<menu_addonsOrderByWithRelationInput>
    cursor?: menu_addonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Menu_addonsScalarFieldEnum>
  }


  /**
   * addons without action
   */
  export type addonsArgs = {
    /**
     * Select specific fields to fetch from the addons
     */
    select?: addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addonsInclude | null
  }



  /**
   * Model branches
   */


  export type AggregateBranches = {
    _count: BranchesCountAggregateOutputType | null
    _avg: BranchesAvgAggregateOutputType | null
    _sum: BranchesSumAggregateOutputType | null
    _min: BranchesMinAggregateOutputType | null
    _max: BranchesMaxAggregateOutputType | null
  }

  export type BranchesAvgAggregateOutputType = {
    id: number | null
    township_id: number | null
    company_id: number | null
  }

  export type BranchesSumAggregateOutputType = {
    id: number | null
    township_id: number | null
    company_id: number | null
  }

  export type BranchesMinAggregateOutputType = {
    id: number | null
    township_id: number | null
    company_id: number | null
    address: string | null
  }

  export type BranchesMaxAggregateOutputType = {
    id: number | null
    township_id: number | null
    company_id: number | null
    address: string | null
  }

  export type BranchesCountAggregateOutputType = {
    id: number
    township_id: number
    company_id: number
    address: number
    _all: number
  }


  export type BranchesAvgAggregateInputType = {
    id?: true
    township_id?: true
    company_id?: true
  }

  export type BranchesSumAggregateInputType = {
    id?: true
    township_id?: true
    company_id?: true
  }

  export type BranchesMinAggregateInputType = {
    id?: true
    township_id?: true
    company_id?: true
    address?: true
  }

  export type BranchesMaxAggregateInputType = {
    id?: true
    township_id?: true
    company_id?: true
    address?: true
  }

  export type BranchesCountAggregateInputType = {
    id?: true
    township_id?: true
    company_id?: true
    address?: true
    _all?: true
  }

  export type BranchesAggregateArgs = {
    /**
     * Filter which branches to aggregate.
     */
    where?: branchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches to fetch.
     */
    orderBy?: Enumerable<branchesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: branchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned branches
    **/
    _count?: true | BranchesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BranchesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BranchesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchesMaxAggregateInputType
  }

  export type GetBranchesAggregateType<T extends BranchesAggregateArgs> = {
        [P in keyof T & keyof AggregateBranches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranches[P]>
      : GetScalarType<T[P], AggregateBranches[P]>
  }




  export type BranchesGroupByArgs = {
    where?: branchesWhereInput
    orderBy?: Enumerable<branchesOrderByWithAggregationInput>
    by: BranchesScalarFieldEnum[]
    having?: branchesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchesCountAggregateInputType | true
    _avg?: BranchesAvgAggregateInputType
    _sum?: BranchesSumAggregateInputType
    _min?: BranchesMinAggregateInputType
    _max?: BranchesMaxAggregateInputType
  }


  export type BranchesGroupByOutputType = {
    id: number
    township_id: number
    company_id: number
    address: string
    _count: BranchesCountAggregateOutputType | null
    _avg: BranchesAvgAggregateOutputType | null
    _sum: BranchesSumAggregateOutputType | null
    _min: BranchesMinAggregateOutputType | null
    _max: BranchesMaxAggregateOutputType | null
  }

  type GetBranchesGroupByPayload<T extends BranchesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BranchesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchesGroupByOutputType[P]>
            : GetScalarType<T[P], BranchesGroupByOutputType[P]>
        }
      >
    >


  export type branchesSelect = {
    id?: boolean
    township_id?: boolean
    company_id?: boolean
    address?: boolean
    companies?: boolean | companiesArgs
    townships?: boolean | townshipsArgs
    branches_addons?: boolean | branches$branches_addonsArgs
    branches_menucategories_menus?: boolean | branches$branches_menucategories_menusArgs
    _count?: boolean | BranchesCountOutputTypeArgs
  }


  export type branchesInclude = {
    companies?: boolean | companiesArgs
    townships?: boolean | townshipsArgs
    branches_addons?: boolean | branches$branches_addonsArgs
    branches_menucategories_menus?: boolean | branches$branches_menucategories_menusArgs
    _count?: boolean | BranchesCountOutputTypeArgs
  }

  export type branchesGetPayload<S extends boolean | null | undefined | branchesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? branches :
    S extends undefined ? never :
    S extends { include: any } & (branchesArgs | branchesFindManyArgs)
    ? branches  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'companies' ? companiesGetPayload<S['include'][P]> :
        P extends 'townships' ? townshipsGetPayload<S['include'][P]> :
        P extends 'branches_addons' ? Array < branches_addonsGetPayload<S['include'][P]>>  :
        P extends 'branches_menucategories_menus' ? Array < branches_menucategories_menusGetPayload<S['include'][P]>>  :
        P extends '_count' ? BranchesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (branchesArgs | branchesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'companies' ? companiesGetPayload<S['select'][P]> :
        P extends 'townships' ? townshipsGetPayload<S['select'][P]> :
        P extends 'branches_addons' ? Array < branches_addonsGetPayload<S['select'][P]>>  :
        P extends 'branches_menucategories_menus' ? Array < branches_menucategories_menusGetPayload<S['select'][P]>>  :
        P extends '_count' ? BranchesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof branches ? branches[P] : never
  } 
      : branches


  type branchesCountArgs = 
    Omit<branchesFindManyArgs, 'select' | 'include'> & {
      select?: BranchesCountAggregateInputType | true
    }

  export interface branchesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Branches that matches the filter.
     * @param {branchesFindUniqueArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends branchesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, branchesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'branches'> extends True ? Prisma__branchesClient<branchesGetPayload<T>> : Prisma__branchesClient<branchesGetPayload<T> | null, null>

    /**
     * Find one Branches that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {branchesFindUniqueOrThrowArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends branchesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, branchesFindUniqueOrThrowArgs>
    ): Prisma__branchesClient<branchesGetPayload<T>>

    /**
     * Find the first Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesFindFirstArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends branchesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, branchesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'branches'> extends True ? Prisma__branchesClient<branchesGetPayload<T>> : Prisma__branchesClient<branchesGetPayload<T> | null, null>

    /**
     * Find the first Branches that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesFindFirstOrThrowArgs} args - Arguments to find a Branches
     * @example
     * // Get one Branches
     * const branches = await prisma.branches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends branchesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, branchesFindFirstOrThrowArgs>
    ): Prisma__branchesClient<branchesGetPayload<T>>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branches.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branches.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchesWithIdOnly = await prisma.branches.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends branchesFindManyArgs>(
      args?: SelectSubset<T, branchesFindManyArgs>
    ): Prisma.PrismaPromise<Array<branchesGetPayload<T>>>

    /**
     * Create a Branches.
     * @param {branchesCreateArgs} args - Arguments to create a Branches.
     * @example
     * // Create one Branches
     * const Branches = await prisma.branches.create({
     *   data: {
     *     // ... data to create a Branches
     *   }
     * })
     * 
    **/
    create<T extends branchesCreateArgs>(
      args: SelectSubset<T, branchesCreateArgs>
    ): Prisma__branchesClient<branchesGetPayload<T>>

    /**
     * Create many Branches.
     *     @param {branchesCreateManyArgs} args - Arguments to create many Branches.
     *     @example
     *     // Create many Branches
     *     const branches = await prisma.branches.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends branchesCreateManyArgs>(
      args?: SelectSubset<T, branchesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Branches.
     * @param {branchesDeleteArgs} args - Arguments to delete one Branches.
     * @example
     * // Delete one Branches
     * const Branches = await prisma.branches.delete({
     *   where: {
     *     // ... filter to delete one Branches
     *   }
     * })
     * 
    **/
    delete<T extends branchesDeleteArgs>(
      args: SelectSubset<T, branchesDeleteArgs>
    ): Prisma__branchesClient<branchesGetPayload<T>>

    /**
     * Update one Branches.
     * @param {branchesUpdateArgs} args - Arguments to update one Branches.
     * @example
     * // Update one Branches
     * const branches = await prisma.branches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends branchesUpdateArgs>(
      args: SelectSubset<T, branchesUpdateArgs>
    ): Prisma__branchesClient<branchesGetPayload<T>>

    /**
     * Delete zero or more Branches.
     * @param {branchesDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends branchesDeleteManyArgs>(
      args?: SelectSubset<T, branchesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branches = await prisma.branches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends branchesUpdateManyArgs>(
      args: SelectSubset<T, branchesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Branches.
     * @param {branchesUpsertArgs} args - Arguments to update or create a Branches.
     * @example
     * // Update or create a Branches
     * const branches = await prisma.branches.upsert({
     *   create: {
     *     // ... data to create a Branches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branches we want to update
     *   }
     * })
    **/
    upsert<T extends branchesUpsertArgs>(
      args: SelectSubset<T, branchesUpsertArgs>
    ): Prisma__branchesClient<branchesGetPayload<T>>

    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branchesCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branches.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends branchesCountArgs>(
      args?: Subset<T, branchesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchesAggregateArgs>(args: Subset<T, BranchesAggregateArgs>): Prisma.PrismaPromise<GetBranchesAggregateType<T>>

    /**
     * Group by Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BranchesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchesGroupByArgs['orderBy'] }
        : { orderBy?: BranchesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BranchesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for branches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__branchesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    companies<T extends companiesArgs= {}>(args?: Subset<T, companiesArgs>): Prisma__companiesClient<companiesGetPayload<T> | Null>;

    townships<T extends townshipsArgs= {}>(args?: Subset<T, townshipsArgs>): Prisma__townshipsClient<townshipsGetPayload<T> | Null>;

    branches_addons<T extends branches$branches_addonsArgs= {}>(args?: Subset<T, branches$branches_addonsArgs>): Prisma.PrismaPromise<Array<branches_addonsGetPayload<T>>| Null>;

    branches_menucategories_menus<T extends branches$branches_menucategories_menusArgs= {}>(args?: Subset<T, branches$branches_menucategories_menusArgs>): Prisma.PrismaPromise<Array<branches_menucategories_menusGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * branches base type for findUnique actions
   */
  export type branchesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branchesInclude | null
    /**
     * Filter, which branches to fetch.
     */
    where: branchesWhereUniqueInput
  }

  /**
   * branches findUnique
   */
  export interface branchesFindUniqueArgs extends branchesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * branches findUniqueOrThrow
   */
  export type branchesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branchesInclude | null
    /**
     * Filter, which branches to fetch.
     */
    where: branchesWhereUniqueInput
  }


  /**
   * branches base type for findFirst actions
   */
  export type branchesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branchesInclude | null
    /**
     * Filter, which branches to fetch.
     */
    where?: branchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches to fetch.
     */
    orderBy?: Enumerable<branchesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for branches.
     */
    cursor?: branchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of branches.
     */
    distinct?: Enumerable<BranchesScalarFieldEnum>
  }

  /**
   * branches findFirst
   */
  export interface branchesFindFirstArgs extends branchesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * branches findFirstOrThrow
   */
  export type branchesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branchesInclude | null
    /**
     * Filter, which branches to fetch.
     */
    where?: branchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches to fetch.
     */
    orderBy?: Enumerable<branchesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for branches.
     */
    cursor?: branchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of branches.
     */
    distinct?: Enumerable<BranchesScalarFieldEnum>
  }


  /**
   * branches findMany
   */
  export type branchesFindManyArgs = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branchesInclude | null
    /**
     * Filter, which branches to fetch.
     */
    where?: branchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches to fetch.
     */
    orderBy?: Enumerable<branchesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing branches.
     */
    cursor?: branchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches.
     */
    skip?: number
    distinct?: Enumerable<BranchesScalarFieldEnum>
  }


  /**
   * branches create
   */
  export type branchesCreateArgs = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branchesInclude | null
    /**
     * The data needed to create a branches.
     */
    data: XOR<branchesCreateInput, branchesUncheckedCreateInput>
  }


  /**
   * branches createMany
   */
  export type branchesCreateManyArgs = {
    /**
     * The data used to create many branches.
     */
    data: Enumerable<branchesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * branches update
   */
  export type branchesUpdateArgs = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branchesInclude | null
    /**
     * The data needed to update a branches.
     */
    data: XOR<branchesUpdateInput, branchesUncheckedUpdateInput>
    /**
     * Choose, which branches to update.
     */
    where: branchesWhereUniqueInput
  }


  /**
   * branches updateMany
   */
  export type branchesUpdateManyArgs = {
    /**
     * The data used to update branches.
     */
    data: XOR<branchesUpdateManyMutationInput, branchesUncheckedUpdateManyInput>
    /**
     * Filter which branches to update
     */
    where?: branchesWhereInput
  }


  /**
   * branches upsert
   */
  export type branchesUpsertArgs = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branchesInclude | null
    /**
     * The filter to search for the branches to update in case it exists.
     */
    where: branchesWhereUniqueInput
    /**
     * In case the branches found by the `where` argument doesn't exist, create a new branches with this data.
     */
    create: XOR<branchesCreateInput, branchesUncheckedCreateInput>
    /**
     * In case the branches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<branchesUpdateInput, branchesUncheckedUpdateInput>
  }


  /**
   * branches delete
   */
  export type branchesDeleteArgs = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branchesInclude | null
    /**
     * Filter which branches to delete.
     */
    where: branchesWhereUniqueInput
  }


  /**
   * branches deleteMany
   */
  export type branchesDeleteManyArgs = {
    /**
     * Filter which branches to delete
     */
    where?: branchesWhereInput
  }


  /**
   * branches.branches_addons
   */
  export type branches$branches_addonsArgs = {
    /**
     * Select specific fields to fetch from the branches_addons
     */
    select?: branches_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_addonsInclude | null
    where?: branches_addonsWhereInput
    orderBy?: Enumerable<branches_addonsOrderByWithRelationInput>
    cursor?: branches_addonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Branches_addonsScalarFieldEnum>
  }


  /**
   * branches.branches_menucategories_menus
   */
  export type branches$branches_menucategories_menusArgs = {
    /**
     * Select specific fields to fetch from the branches_menucategories_menus
     */
    select?: branches_menucategories_menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_menucategories_menusInclude | null
    where?: branches_menucategories_menusWhereInput
    orderBy?: Enumerable<branches_menucategories_menusOrderByWithRelationInput>
    cursor?: branches_menucategories_menusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Branches_menucategories_menusScalarFieldEnum>
  }


  /**
   * branches without action
   */
  export type branchesArgs = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branchesInclude | null
  }



  /**
   * Model branches_addons
   */


  export type AggregateBranches_addons = {
    _count: Branches_addonsCountAggregateOutputType | null
    _avg: Branches_addonsAvgAggregateOutputType | null
    _sum: Branches_addonsSumAggregateOutputType | null
    _min: Branches_addonsMinAggregateOutputType | null
    _max: Branches_addonsMaxAggregateOutputType | null
  }

  export type Branches_addonsAvgAggregateOutputType = {
    id: number | null
    addon_id: number | null
    branch_id: number | null
  }

  export type Branches_addonsSumAggregateOutputType = {
    id: number | null
    addon_id: number | null
    branch_id: number | null
  }

  export type Branches_addonsMinAggregateOutputType = {
    id: number | null
    addon_id: number | null
    branch_id: number | null
    is_available: boolean | null
  }

  export type Branches_addonsMaxAggregateOutputType = {
    id: number | null
    addon_id: number | null
    branch_id: number | null
    is_available: boolean | null
  }

  export type Branches_addonsCountAggregateOutputType = {
    id: number
    addon_id: number
    branch_id: number
    is_available: number
    _all: number
  }


  export type Branches_addonsAvgAggregateInputType = {
    id?: true
    addon_id?: true
    branch_id?: true
  }

  export type Branches_addonsSumAggregateInputType = {
    id?: true
    addon_id?: true
    branch_id?: true
  }

  export type Branches_addonsMinAggregateInputType = {
    id?: true
    addon_id?: true
    branch_id?: true
    is_available?: true
  }

  export type Branches_addonsMaxAggregateInputType = {
    id?: true
    addon_id?: true
    branch_id?: true
    is_available?: true
  }

  export type Branches_addonsCountAggregateInputType = {
    id?: true
    addon_id?: true
    branch_id?: true
    is_available?: true
    _all?: true
  }

  export type Branches_addonsAggregateArgs = {
    /**
     * Filter which branches_addons to aggregate.
     */
    where?: branches_addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches_addons to fetch.
     */
    orderBy?: Enumerable<branches_addonsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: branches_addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches_addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches_addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned branches_addons
    **/
    _count?: true | Branches_addonsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Branches_addonsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Branches_addonsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Branches_addonsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Branches_addonsMaxAggregateInputType
  }

  export type GetBranches_addonsAggregateType<T extends Branches_addonsAggregateArgs> = {
        [P in keyof T & keyof AggregateBranches_addons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranches_addons[P]>
      : GetScalarType<T[P], AggregateBranches_addons[P]>
  }




  export type Branches_addonsGroupByArgs = {
    where?: branches_addonsWhereInput
    orderBy?: Enumerable<branches_addonsOrderByWithAggregationInput>
    by: Branches_addonsScalarFieldEnum[]
    having?: branches_addonsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Branches_addonsCountAggregateInputType | true
    _avg?: Branches_addonsAvgAggregateInputType
    _sum?: Branches_addonsSumAggregateInputType
    _min?: Branches_addonsMinAggregateInputType
    _max?: Branches_addonsMaxAggregateInputType
  }


  export type Branches_addonsGroupByOutputType = {
    id: number
    addon_id: number
    branch_id: number
    is_available: boolean | null
    _count: Branches_addonsCountAggregateOutputType | null
    _avg: Branches_addonsAvgAggregateOutputType | null
    _sum: Branches_addonsSumAggregateOutputType | null
    _min: Branches_addonsMinAggregateOutputType | null
    _max: Branches_addonsMaxAggregateOutputType | null
  }

  type GetBranches_addonsGroupByPayload<T extends Branches_addonsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Branches_addonsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Branches_addonsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Branches_addonsGroupByOutputType[P]>
            : GetScalarType<T[P], Branches_addonsGroupByOutputType[P]>
        }
      >
    >


  export type branches_addonsSelect = {
    id?: boolean
    addon_id?: boolean
    branch_id?: boolean
    is_available?: boolean
    addons?: boolean | addonsArgs
    branches?: boolean | branchesArgs
  }


  export type branches_addonsInclude = {
    addons?: boolean | addonsArgs
    branches?: boolean | branchesArgs
  }

  export type branches_addonsGetPayload<S extends boolean | null | undefined | branches_addonsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? branches_addons :
    S extends undefined ? never :
    S extends { include: any } & (branches_addonsArgs | branches_addonsFindManyArgs)
    ? branches_addons  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'addons' ? addonsGetPayload<S['include'][P]> :
        P extends 'branches' ? branchesGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (branches_addonsArgs | branches_addonsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'addons' ? addonsGetPayload<S['select'][P]> :
        P extends 'branches' ? branchesGetPayload<S['select'][P]> :  P extends keyof branches_addons ? branches_addons[P] : never
  } 
      : branches_addons


  type branches_addonsCountArgs = 
    Omit<branches_addonsFindManyArgs, 'select' | 'include'> & {
      select?: Branches_addonsCountAggregateInputType | true
    }

  export interface branches_addonsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Branches_addons that matches the filter.
     * @param {branches_addonsFindUniqueArgs} args - Arguments to find a Branches_addons
     * @example
     * // Get one Branches_addons
     * const branches_addons = await prisma.branches_addons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends branches_addonsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, branches_addonsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'branches_addons'> extends True ? Prisma__branches_addonsClient<branches_addonsGetPayload<T>> : Prisma__branches_addonsClient<branches_addonsGetPayload<T> | null, null>

    /**
     * Find one Branches_addons that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {branches_addonsFindUniqueOrThrowArgs} args - Arguments to find a Branches_addons
     * @example
     * // Get one Branches_addons
     * const branches_addons = await prisma.branches_addons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends branches_addonsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, branches_addonsFindUniqueOrThrowArgs>
    ): Prisma__branches_addonsClient<branches_addonsGetPayload<T>>

    /**
     * Find the first Branches_addons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branches_addonsFindFirstArgs} args - Arguments to find a Branches_addons
     * @example
     * // Get one Branches_addons
     * const branches_addons = await prisma.branches_addons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends branches_addonsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, branches_addonsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'branches_addons'> extends True ? Prisma__branches_addonsClient<branches_addonsGetPayload<T>> : Prisma__branches_addonsClient<branches_addonsGetPayload<T> | null, null>

    /**
     * Find the first Branches_addons that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branches_addonsFindFirstOrThrowArgs} args - Arguments to find a Branches_addons
     * @example
     * // Get one Branches_addons
     * const branches_addons = await prisma.branches_addons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends branches_addonsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, branches_addonsFindFirstOrThrowArgs>
    ): Prisma__branches_addonsClient<branches_addonsGetPayload<T>>

    /**
     * Find zero or more Branches_addons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branches_addonsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches_addons
     * const branches_addons = await prisma.branches_addons.findMany()
     * 
     * // Get first 10 Branches_addons
     * const branches_addons = await prisma.branches_addons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branches_addonsWithIdOnly = await prisma.branches_addons.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends branches_addonsFindManyArgs>(
      args?: SelectSubset<T, branches_addonsFindManyArgs>
    ): Prisma.PrismaPromise<Array<branches_addonsGetPayload<T>>>

    /**
     * Create a Branches_addons.
     * @param {branches_addonsCreateArgs} args - Arguments to create a Branches_addons.
     * @example
     * // Create one Branches_addons
     * const Branches_addons = await prisma.branches_addons.create({
     *   data: {
     *     // ... data to create a Branches_addons
     *   }
     * })
     * 
    **/
    create<T extends branches_addonsCreateArgs>(
      args: SelectSubset<T, branches_addonsCreateArgs>
    ): Prisma__branches_addonsClient<branches_addonsGetPayload<T>>

    /**
     * Create many Branches_addons.
     *     @param {branches_addonsCreateManyArgs} args - Arguments to create many Branches_addons.
     *     @example
     *     // Create many Branches_addons
     *     const branches_addons = await prisma.branches_addons.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends branches_addonsCreateManyArgs>(
      args?: SelectSubset<T, branches_addonsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Branches_addons.
     * @param {branches_addonsDeleteArgs} args - Arguments to delete one Branches_addons.
     * @example
     * // Delete one Branches_addons
     * const Branches_addons = await prisma.branches_addons.delete({
     *   where: {
     *     // ... filter to delete one Branches_addons
     *   }
     * })
     * 
    **/
    delete<T extends branches_addonsDeleteArgs>(
      args: SelectSubset<T, branches_addonsDeleteArgs>
    ): Prisma__branches_addonsClient<branches_addonsGetPayload<T>>

    /**
     * Update one Branches_addons.
     * @param {branches_addonsUpdateArgs} args - Arguments to update one Branches_addons.
     * @example
     * // Update one Branches_addons
     * const branches_addons = await prisma.branches_addons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends branches_addonsUpdateArgs>(
      args: SelectSubset<T, branches_addonsUpdateArgs>
    ): Prisma__branches_addonsClient<branches_addonsGetPayload<T>>

    /**
     * Delete zero or more Branches_addons.
     * @param {branches_addonsDeleteManyArgs} args - Arguments to filter Branches_addons to delete.
     * @example
     * // Delete a few Branches_addons
     * const { count } = await prisma.branches_addons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends branches_addonsDeleteManyArgs>(
      args?: SelectSubset<T, branches_addonsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches_addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branches_addonsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches_addons
     * const branches_addons = await prisma.branches_addons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends branches_addonsUpdateManyArgs>(
      args: SelectSubset<T, branches_addonsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Branches_addons.
     * @param {branches_addonsUpsertArgs} args - Arguments to update or create a Branches_addons.
     * @example
     * // Update or create a Branches_addons
     * const branches_addons = await prisma.branches_addons.upsert({
     *   create: {
     *     // ... data to create a Branches_addons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branches_addons we want to update
     *   }
     * })
    **/
    upsert<T extends branches_addonsUpsertArgs>(
      args: SelectSubset<T, branches_addonsUpsertArgs>
    ): Prisma__branches_addonsClient<branches_addonsGetPayload<T>>

    /**
     * Count the number of Branches_addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branches_addonsCountArgs} args - Arguments to filter Branches_addons to count.
     * @example
     * // Count the number of Branches_addons
     * const count = await prisma.branches_addons.count({
     *   where: {
     *     // ... the filter for the Branches_addons we want to count
     *   }
     * })
    **/
    count<T extends branches_addonsCountArgs>(
      args?: Subset<T, branches_addonsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Branches_addonsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branches_addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Branches_addonsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Branches_addonsAggregateArgs>(args: Subset<T, Branches_addonsAggregateArgs>): Prisma.PrismaPromise<GetBranches_addonsAggregateType<T>>

    /**
     * Group by Branches_addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Branches_addonsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Branches_addonsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Branches_addonsGroupByArgs['orderBy'] }
        : { orderBy?: Branches_addonsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Branches_addonsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranches_addonsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for branches_addons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__branches_addonsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    addons<T extends addonsArgs= {}>(args?: Subset<T, addonsArgs>): Prisma__addonsClient<addonsGetPayload<T> | Null>;

    branches<T extends branchesArgs= {}>(args?: Subset<T, branchesArgs>): Prisma__branchesClient<branchesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * branches_addons base type for findUnique actions
   */
  export type branches_addonsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the branches_addons
     */
    select?: branches_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_addonsInclude | null
    /**
     * Filter, which branches_addons to fetch.
     */
    where: branches_addonsWhereUniqueInput
  }

  /**
   * branches_addons findUnique
   */
  export interface branches_addonsFindUniqueArgs extends branches_addonsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * branches_addons findUniqueOrThrow
   */
  export type branches_addonsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the branches_addons
     */
    select?: branches_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_addonsInclude | null
    /**
     * Filter, which branches_addons to fetch.
     */
    where: branches_addonsWhereUniqueInput
  }


  /**
   * branches_addons base type for findFirst actions
   */
  export type branches_addonsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the branches_addons
     */
    select?: branches_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_addonsInclude | null
    /**
     * Filter, which branches_addons to fetch.
     */
    where?: branches_addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches_addons to fetch.
     */
    orderBy?: Enumerable<branches_addonsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for branches_addons.
     */
    cursor?: branches_addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches_addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches_addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of branches_addons.
     */
    distinct?: Enumerable<Branches_addonsScalarFieldEnum>
  }

  /**
   * branches_addons findFirst
   */
  export interface branches_addonsFindFirstArgs extends branches_addonsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * branches_addons findFirstOrThrow
   */
  export type branches_addonsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the branches_addons
     */
    select?: branches_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_addonsInclude | null
    /**
     * Filter, which branches_addons to fetch.
     */
    where?: branches_addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches_addons to fetch.
     */
    orderBy?: Enumerable<branches_addonsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for branches_addons.
     */
    cursor?: branches_addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches_addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches_addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of branches_addons.
     */
    distinct?: Enumerable<Branches_addonsScalarFieldEnum>
  }


  /**
   * branches_addons findMany
   */
  export type branches_addonsFindManyArgs = {
    /**
     * Select specific fields to fetch from the branches_addons
     */
    select?: branches_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_addonsInclude | null
    /**
     * Filter, which branches_addons to fetch.
     */
    where?: branches_addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches_addons to fetch.
     */
    orderBy?: Enumerable<branches_addonsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing branches_addons.
     */
    cursor?: branches_addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches_addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches_addons.
     */
    skip?: number
    distinct?: Enumerable<Branches_addonsScalarFieldEnum>
  }


  /**
   * branches_addons create
   */
  export type branches_addonsCreateArgs = {
    /**
     * Select specific fields to fetch from the branches_addons
     */
    select?: branches_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_addonsInclude | null
    /**
     * The data needed to create a branches_addons.
     */
    data: XOR<branches_addonsCreateInput, branches_addonsUncheckedCreateInput>
  }


  /**
   * branches_addons createMany
   */
  export type branches_addonsCreateManyArgs = {
    /**
     * The data used to create many branches_addons.
     */
    data: Enumerable<branches_addonsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * branches_addons update
   */
  export type branches_addonsUpdateArgs = {
    /**
     * Select specific fields to fetch from the branches_addons
     */
    select?: branches_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_addonsInclude | null
    /**
     * The data needed to update a branches_addons.
     */
    data: XOR<branches_addonsUpdateInput, branches_addonsUncheckedUpdateInput>
    /**
     * Choose, which branches_addons to update.
     */
    where: branches_addonsWhereUniqueInput
  }


  /**
   * branches_addons updateMany
   */
  export type branches_addonsUpdateManyArgs = {
    /**
     * The data used to update branches_addons.
     */
    data: XOR<branches_addonsUpdateManyMutationInput, branches_addonsUncheckedUpdateManyInput>
    /**
     * Filter which branches_addons to update
     */
    where?: branches_addonsWhereInput
  }


  /**
   * branches_addons upsert
   */
  export type branches_addonsUpsertArgs = {
    /**
     * Select specific fields to fetch from the branches_addons
     */
    select?: branches_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_addonsInclude | null
    /**
     * The filter to search for the branches_addons to update in case it exists.
     */
    where: branches_addonsWhereUniqueInput
    /**
     * In case the branches_addons found by the `where` argument doesn't exist, create a new branches_addons with this data.
     */
    create: XOR<branches_addonsCreateInput, branches_addonsUncheckedCreateInput>
    /**
     * In case the branches_addons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<branches_addonsUpdateInput, branches_addonsUncheckedUpdateInput>
  }


  /**
   * branches_addons delete
   */
  export type branches_addonsDeleteArgs = {
    /**
     * Select specific fields to fetch from the branches_addons
     */
    select?: branches_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_addonsInclude | null
    /**
     * Filter which branches_addons to delete.
     */
    where: branches_addonsWhereUniqueInput
  }


  /**
   * branches_addons deleteMany
   */
  export type branches_addonsDeleteManyArgs = {
    /**
     * Filter which branches_addons to delete
     */
    where?: branches_addonsWhereInput
  }


  /**
   * branches_addons without action
   */
  export type branches_addonsArgs = {
    /**
     * Select specific fields to fetch from the branches_addons
     */
    select?: branches_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_addonsInclude | null
  }



  /**
   * Model branches_menucategories_menus
   */


  export type AggregateBranches_menucategories_menus = {
    _count: Branches_menucategories_menusCountAggregateOutputType | null
    _avg: Branches_menucategories_menusAvgAggregateOutputType | null
    _sum: Branches_menucategories_menusSumAggregateOutputType | null
    _min: Branches_menucategories_menusMinAggregateOutputType | null
    _max: Branches_menucategories_menusMaxAggregateOutputType | null
  }

  export type Branches_menucategories_menusAvgAggregateOutputType = {
    id: number | null
    menu_id: number | null
    branch_id: number | null
    menucategory_id: number | null
  }

  export type Branches_menucategories_menusSumAggregateOutputType = {
    id: number | null
    menu_id: number | null
    branch_id: number | null
    menucategory_id: number | null
  }

  export type Branches_menucategories_menusMinAggregateOutputType = {
    id: number | null
    menu_id: number | null
    branch_id: number | null
    menucategory_id: number | null
    is_available: boolean | null
  }

  export type Branches_menucategories_menusMaxAggregateOutputType = {
    id: number | null
    menu_id: number | null
    branch_id: number | null
    menucategory_id: number | null
    is_available: boolean | null
  }

  export type Branches_menucategories_menusCountAggregateOutputType = {
    id: number
    menu_id: number
    branch_id: number
    menucategory_id: number
    is_available: number
    _all: number
  }


  export type Branches_menucategories_menusAvgAggregateInputType = {
    id?: true
    menu_id?: true
    branch_id?: true
    menucategory_id?: true
  }

  export type Branches_menucategories_menusSumAggregateInputType = {
    id?: true
    menu_id?: true
    branch_id?: true
    menucategory_id?: true
  }

  export type Branches_menucategories_menusMinAggregateInputType = {
    id?: true
    menu_id?: true
    branch_id?: true
    menucategory_id?: true
    is_available?: true
  }

  export type Branches_menucategories_menusMaxAggregateInputType = {
    id?: true
    menu_id?: true
    branch_id?: true
    menucategory_id?: true
    is_available?: true
  }

  export type Branches_menucategories_menusCountAggregateInputType = {
    id?: true
    menu_id?: true
    branch_id?: true
    menucategory_id?: true
    is_available?: true
    _all?: true
  }

  export type Branches_menucategories_menusAggregateArgs = {
    /**
     * Filter which branches_menucategories_menus to aggregate.
     */
    where?: branches_menucategories_menusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches_menucategories_menus to fetch.
     */
    orderBy?: Enumerable<branches_menucategories_menusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: branches_menucategories_menusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches_menucategories_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches_menucategories_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned branches_menucategories_menus
    **/
    _count?: true | Branches_menucategories_menusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Branches_menucategories_menusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Branches_menucategories_menusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Branches_menucategories_menusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Branches_menucategories_menusMaxAggregateInputType
  }

  export type GetBranches_menucategories_menusAggregateType<T extends Branches_menucategories_menusAggregateArgs> = {
        [P in keyof T & keyof AggregateBranches_menucategories_menus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranches_menucategories_menus[P]>
      : GetScalarType<T[P], AggregateBranches_menucategories_menus[P]>
  }




  export type Branches_menucategories_menusGroupByArgs = {
    where?: branches_menucategories_menusWhereInput
    orderBy?: Enumerable<branches_menucategories_menusOrderByWithAggregationInput>
    by: Branches_menucategories_menusScalarFieldEnum[]
    having?: branches_menucategories_menusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Branches_menucategories_menusCountAggregateInputType | true
    _avg?: Branches_menucategories_menusAvgAggregateInputType
    _sum?: Branches_menucategories_menusSumAggregateInputType
    _min?: Branches_menucategories_menusMinAggregateInputType
    _max?: Branches_menucategories_menusMaxAggregateInputType
  }


  export type Branches_menucategories_menusGroupByOutputType = {
    id: number
    menu_id: number | null
    branch_id: number
    menucategory_id: number
    is_available: boolean
    _count: Branches_menucategories_menusCountAggregateOutputType | null
    _avg: Branches_menucategories_menusAvgAggregateOutputType | null
    _sum: Branches_menucategories_menusSumAggregateOutputType | null
    _min: Branches_menucategories_menusMinAggregateOutputType | null
    _max: Branches_menucategories_menusMaxAggregateOutputType | null
  }

  type GetBranches_menucategories_menusGroupByPayload<T extends Branches_menucategories_menusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Branches_menucategories_menusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Branches_menucategories_menusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Branches_menucategories_menusGroupByOutputType[P]>
            : GetScalarType<T[P], Branches_menucategories_menusGroupByOutputType[P]>
        }
      >
    >


  export type branches_menucategories_menusSelect = {
    id?: boolean
    menu_id?: boolean
    branch_id?: boolean
    menucategory_id?: boolean
    is_available?: boolean
    menus?: boolean | menusArgs
    menu_categories?: boolean | menu_categoriesArgs
    branches?: boolean | branchesArgs
  }


  export type branches_menucategories_menusInclude = {
    menus?: boolean | menusArgs
    menu_categories?: boolean | menu_categoriesArgs
    branches?: boolean | branchesArgs
  }

  export type branches_menucategories_menusGetPayload<S extends boolean | null | undefined | branches_menucategories_menusArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? branches_menucategories_menus :
    S extends undefined ? never :
    S extends { include: any } & (branches_menucategories_menusArgs | branches_menucategories_menusFindManyArgs)
    ? branches_menucategories_menus  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'menus' ? menusGetPayload<S['include'][P]> | null :
        P extends 'menu_categories' ? menu_categoriesGetPayload<S['include'][P]> :
        P extends 'branches' ? branchesGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (branches_menucategories_menusArgs | branches_menucategories_menusFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'menus' ? menusGetPayload<S['select'][P]> | null :
        P extends 'menu_categories' ? menu_categoriesGetPayload<S['select'][P]> :
        P extends 'branches' ? branchesGetPayload<S['select'][P]> :  P extends keyof branches_menucategories_menus ? branches_menucategories_menus[P] : never
  } 
      : branches_menucategories_menus


  type branches_menucategories_menusCountArgs = 
    Omit<branches_menucategories_menusFindManyArgs, 'select' | 'include'> & {
      select?: Branches_menucategories_menusCountAggregateInputType | true
    }

  export interface branches_menucategories_menusDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Branches_menucategories_menus that matches the filter.
     * @param {branches_menucategories_menusFindUniqueArgs} args - Arguments to find a Branches_menucategories_menus
     * @example
     * // Get one Branches_menucategories_menus
     * const branches_menucategories_menus = await prisma.branches_menucategories_menus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends branches_menucategories_menusFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, branches_menucategories_menusFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'branches_menucategories_menus'> extends True ? Prisma__branches_menucategories_menusClient<branches_menucategories_menusGetPayload<T>> : Prisma__branches_menucategories_menusClient<branches_menucategories_menusGetPayload<T> | null, null>

    /**
     * Find one Branches_menucategories_menus that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {branches_menucategories_menusFindUniqueOrThrowArgs} args - Arguments to find a Branches_menucategories_menus
     * @example
     * // Get one Branches_menucategories_menus
     * const branches_menucategories_menus = await prisma.branches_menucategories_menus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends branches_menucategories_menusFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, branches_menucategories_menusFindUniqueOrThrowArgs>
    ): Prisma__branches_menucategories_menusClient<branches_menucategories_menusGetPayload<T>>

    /**
     * Find the first Branches_menucategories_menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branches_menucategories_menusFindFirstArgs} args - Arguments to find a Branches_menucategories_menus
     * @example
     * // Get one Branches_menucategories_menus
     * const branches_menucategories_menus = await prisma.branches_menucategories_menus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends branches_menucategories_menusFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, branches_menucategories_menusFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'branches_menucategories_menus'> extends True ? Prisma__branches_menucategories_menusClient<branches_menucategories_menusGetPayload<T>> : Prisma__branches_menucategories_menusClient<branches_menucategories_menusGetPayload<T> | null, null>

    /**
     * Find the first Branches_menucategories_menus that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branches_menucategories_menusFindFirstOrThrowArgs} args - Arguments to find a Branches_menucategories_menus
     * @example
     * // Get one Branches_menucategories_menus
     * const branches_menucategories_menus = await prisma.branches_menucategories_menus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends branches_menucategories_menusFindFirstOrThrowArgs>(
      args?: SelectSubset<T, branches_menucategories_menusFindFirstOrThrowArgs>
    ): Prisma__branches_menucategories_menusClient<branches_menucategories_menusGetPayload<T>>

    /**
     * Find zero or more Branches_menucategories_menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branches_menucategories_menusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches_menucategories_menus
     * const branches_menucategories_menus = await prisma.branches_menucategories_menus.findMany()
     * 
     * // Get first 10 Branches_menucategories_menus
     * const branches_menucategories_menus = await prisma.branches_menucategories_menus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branches_menucategories_menusWithIdOnly = await prisma.branches_menucategories_menus.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends branches_menucategories_menusFindManyArgs>(
      args?: SelectSubset<T, branches_menucategories_menusFindManyArgs>
    ): Prisma.PrismaPromise<Array<branches_menucategories_menusGetPayload<T>>>

    /**
     * Create a Branches_menucategories_menus.
     * @param {branches_menucategories_menusCreateArgs} args - Arguments to create a Branches_menucategories_menus.
     * @example
     * // Create one Branches_menucategories_menus
     * const Branches_menucategories_menus = await prisma.branches_menucategories_menus.create({
     *   data: {
     *     // ... data to create a Branches_menucategories_menus
     *   }
     * })
     * 
    **/
    create<T extends branches_menucategories_menusCreateArgs>(
      args: SelectSubset<T, branches_menucategories_menusCreateArgs>
    ): Prisma__branches_menucategories_menusClient<branches_menucategories_menusGetPayload<T>>

    /**
     * Create many Branches_menucategories_menus.
     *     @param {branches_menucategories_menusCreateManyArgs} args - Arguments to create many Branches_menucategories_menus.
     *     @example
     *     // Create many Branches_menucategories_menus
     *     const branches_menucategories_menus = await prisma.branches_menucategories_menus.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends branches_menucategories_menusCreateManyArgs>(
      args?: SelectSubset<T, branches_menucategories_menusCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Branches_menucategories_menus.
     * @param {branches_menucategories_menusDeleteArgs} args - Arguments to delete one Branches_menucategories_menus.
     * @example
     * // Delete one Branches_menucategories_menus
     * const Branches_menucategories_menus = await prisma.branches_menucategories_menus.delete({
     *   where: {
     *     // ... filter to delete one Branches_menucategories_menus
     *   }
     * })
     * 
    **/
    delete<T extends branches_menucategories_menusDeleteArgs>(
      args: SelectSubset<T, branches_menucategories_menusDeleteArgs>
    ): Prisma__branches_menucategories_menusClient<branches_menucategories_menusGetPayload<T>>

    /**
     * Update one Branches_menucategories_menus.
     * @param {branches_menucategories_menusUpdateArgs} args - Arguments to update one Branches_menucategories_menus.
     * @example
     * // Update one Branches_menucategories_menus
     * const branches_menucategories_menus = await prisma.branches_menucategories_menus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends branches_menucategories_menusUpdateArgs>(
      args: SelectSubset<T, branches_menucategories_menusUpdateArgs>
    ): Prisma__branches_menucategories_menusClient<branches_menucategories_menusGetPayload<T>>

    /**
     * Delete zero or more Branches_menucategories_menus.
     * @param {branches_menucategories_menusDeleteManyArgs} args - Arguments to filter Branches_menucategories_menus to delete.
     * @example
     * // Delete a few Branches_menucategories_menus
     * const { count } = await prisma.branches_menucategories_menus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends branches_menucategories_menusDeleteManyArgs>(
      args?: SelectSubset<T, branches_menucategories_menusDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches_menucategories_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branches_menucategories_menusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches_menucategories_menus
     * const branches_menucategories_menus = await prisma.branches_menucategories_menus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends branches_menucategories_menusUpdateManyArgs>(
      args: SelectSubset<T, branches_menucategories_menusUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Branches_menucategories_menus.
     * @param {branches_menucategories_menusUpsertArgs} args - Arguments to update or create a Branches_menucategories_menus.
     * @example
     * // Update or create a Branches_menucategories_menus
     * const branches_menucategories_menus = await prisma.branches_menucategories_menus.upsert({
     *   create: {
     *     // ... data to create a Branches_menucategories_menus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branches_menucategories_menus we want to update
     *   }
     * })
    **/
    upsert<T extends branches_menucategories_menusUpsertArgs>(
      args: SelectSubset<T, branches_menucategories_menusUpsertArgs>
    ): Prisma__branches_menucategories_menusClient<branches_menucategories_menusGetPayload<T>>

    /**
     * Count the number of Branches_menucategories_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {branches_menucategories_menusCountArgs} args - Arguments to filter Branches_menucategories_menus to count.
     * @example
     * // Count the number of Branches_menucategories_menus
     * const count = await prisma.branches_menucategories_menus.count({
     *   where: {
     *     // ... the filter for the Branches_menucategories_menus we want to count
     *   }
     * })
    **/
    count<T extends branches_menucategories_menusCountArgs>(
      args?: Subset<T, branches_menucategories_menusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Branches_menucategories_menusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branches_menucategories_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Branches_menucategories_menusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Branches_menucategories_menusAggregateArgs>(args: Subset<T, Branches_menucategories_menusAggregateArgs>): Prisma.PrismaPromise<GetBranches_menucategories_menusAggregateType<T>>

    /**
     * Group by Branches_menucategories_menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Branches_menucategories_menusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Branches_menucategories_menusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Branches_menucategories_menusGroupByArgs['orderBy'] }
        : { orderBy?: Branches_menucategories_menusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Branches_menucategories_menusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranches_menucategories_menusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for branches_menucategories_menus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__branches_menucategories_menusClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    menus<T extends menusArgs= {}>(args?: Subset<T, menusArgs>): Prisma__menusClient<menusGetPayload<T> | Null>;

    menu_categories<T extends menu_categoriesArgs= {}>(args?: Subset<T, menu_categoriesArgs>): Prisma__menu_categoriesClient<menu_categoriesGetPayload<T> | Null>;

    branches<T extends branchesArgs= {}>(args?: Subset<T, branchesArgs>): Prisma__branchesClient<branchesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * branches_menucategories_menus base type for findUnique actions
   */
  export type branches_menucategories_menusFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the branches_menucategories_menus
     */
    select?: branches_menucategories_menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_menucategories_menusInclude | null
    /**
     * Filter, which branches_menucategories_menus to fetch.
     */
    where: branches_menucategories_menusWhereUniqueInput
  }

  /**
   * branches_menucategories_menus findUnique
   */
  export interface branches_menucategories_menusFindUniqueArgs extends branches_menucategories_menusFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * branches_menucategories_menus findUniqueOrThrow
   */
  export type branches_menucategories_menusFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the branches_menucategories_menus
     */
    select?: branches_menucategories_menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_menucategories_menusInclude | null
    /**
     * Filter, which branches_menucategories_menus to fetch.
     */
    where: branches_menucategories_menusWhereUniqueInput
  }


  /**
   * branches_menucategories_menus base type for findFirst actions
   */
  export type branches_menucategories_menusFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the branches_menucategories_menus
     */
    select?: branches_menucategories_menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_menucategories_menusInclude | null
    /**
     * Filter, which branches_menucategories_menus to fetch.
     */
    where?: branches_menucategories_menusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches_menucategories_menus to fetch.
     */
    orderBy?: Enumerable<branches_menucategories_menusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for branches_menucategories_menus.
     */
    cursor?: branches_menucategories_menusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches_menucategories_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches_menucategories_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of branches_menucategories_menus.
     */
    distinct?: Enumerable<Branches_menucategories_menusScalarFieldEnum>
  }

  /**
   * branches_menucategories_menus findFirst
   */
  export interface branches_menucategories_menusFindFirstArgs extends branches_menucategories_menusFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * branches_menucategories_menus findFirstOrThrow
   */
  export type branches_menucategories_menusFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the branches_menucategories_menus
     */
    select?: branches_menucategories_menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_menucategories_menusInclude | null
    /**
     * Filter, which branches_menucategories_menus to fetch.
     */
    where?: branches_menucategories_menusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches_menucategories_menus to fetch.
     */
    orderBy?: Enumerable<branches_menucategories_menusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for branches_menucategories_menus.
     */
    cursor?: branches_menucategories_menusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches_menucategories_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches_menucategories_menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of branches_menucategories_menus.
     */
    distinct?: Enumerable<Branches_menucategories_menusScalarFieldEnum>
  }


  /**
   * branches_menucategories_menus findMany
   */
  export type branches_menucategories_menusFindManyArgs = {
    /**
     * Select specific fields to fetch from the branches_menucategories_menus
     */
    select?: branches_menucategories_menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_menucategories_menusInclude | null
    /**
     * Filter, which branches_menucategories_menus to fetch.
     */
    where?: branches_menucategories_menusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of branches_menucategories_menus to fetch.
     */
    orderBy?: Enumerable<branches_menucategories_menusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing branches_menucategories_menus.
     */
    cursor?: branches_menucategories_menusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` branches_menucategories_menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` branches_menucategories_menus.
     */
    skip?: number
    distinct?: Enumerable<Branches_menucategories_menusScalarFieldEnum>
  }


  /**
   * branches_menucategories_menus create
   */
  export type branches_menucategories_menusCreateArgs = {
    /**
     * Select specific fields to fetch from the branches_menucategories_menus
     */
    select?: branches_menucategories_menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_menucategories_menusInclude | null
    /**
     * The data needed to create a branches_menucategories_menus.
     */
    data: XOR<branches_menucategories_menusCreateInput, branches_menucategories_menusUncheckedCreateInput>
  }


  /**
   * branches_menucategories_menus createMany
   */
  export type branches_menucategories_menusCreateManyArgs = {
    /**
     * The data used to create many branches_menucategories_menus.
     */
    data: Enumerable<branches_menucategories_menusCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * branches_menucategories_menus update
   */
  export type branches_menucategories_menusUpdateArgs = {
    /**
     * Select specific fields to fetch from the branches_menucategories_menus
     */
    select?: branches_menucategories_menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_menucategories_menusInclude | null
    /**
     * The data needed to update a branches_menucategories_menus.
     */
    data: XOR<branches_menucategories_menusUpdateInput, branches_menucategories_menusUncheckedUpdateInput>
    /**
     * Choose, which branches_menucategories_menus to update.
     */
    where: branches_menucategories_menusWhereUniqueInput
  }


  /**
   * branches_menucategories_menus updateMany
   */
  export type branches_menucategories_menusUpdateManyArgs = {
    /**
     * The data used to update branches_menucategories_menus.
     */
    data: XOR<branches_menucategories_menusUpdateManyMutationInput, branches_menucategories_menusUncheckedUpdateManyInput>
    /**
     * Filter which branches_menucategories_menus to update
     */
    where?: branches_menucategories_menusWhereInput
  }


  /**
   * branches_menucategories_menus upsert
   */
  export type branches_menucategories_menusUpsertArgs = {
    /**
     * Select specific fields to fetch from the branches_menucategories_menus
     */
    select?: branches_menucategories_menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_menucategories_menusInclude | null
    /**
     * The filter to search for the branches_menucategories_menus to update in case it exists.
     */
    where: branches_menucategories_menusWhereUniqueInput
    /**
     * In case the branches_menucategories_menus found by the `where` argument doesn't exist, create a new branches_menucategories_menus with this data.
     */
    create: XOR<branches_menucategories_menusCreateInput, branches_menucategories_menusUncheckedCreateInput>
    /**
     * In case the branches_menucategories_menus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<branches_menucategories_menusUpdateInput, branches_menucategories_menusUncheckedUpdateInput>
  }


  /**
   * branches_menucategories_menus delete
   */
  export type branches_menucategories_menusDeleteArgs = {
    /**
     * Select specific fields to fetch from the branches_menucategories_menus
     */
    select?: branches_menucategories_menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_menucategories_menusInclude | null
    /**
     * Filter which branches_menucategories_menus to delete.
     */
    where: branches_menucategories_menusWhereUniqueInput
  }


  /**
   * branches_menucategories_menus deleteMany
   */
  export type branches_menucategories_menusDeleteManyArgs = {
    /**
     * Filter which branches_menucategories_menus to delete
     */
    where?: branches_menucategories_menusWhereInput
  }


  /**
   * branches_menucategories_menus without action
   */
  export type branches_menucategories_menusArgs = {
    /**
     * Select specific fields to fetch from the branches_menucategories_menus
     */
    select?: branches_menucategories_menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_menucategories_menusInclude | null
  }



  /**
   * Model companies
   */


  export type AggregateCompanies = {
    _count: CompaniesCountAggregateOutputType | null
    _avg: CompaniesAvgAggregateOutputType | null
    _sum: CompaniesSumAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  export type CompaniesAvgAggregateOutputType = {
    id: number | null
  }

  export type CompaniesSumAggregateOutputType = {
    id: number | null
  }

  export type CompaniesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CompaniesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CompaniesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CompaniesAvgAggregateInputType = {
    id?: true
  }

  export type CompaniesSumAggregateInputType = {
    id?: true
  }

  export type CompaniesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CompaniesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CompaniesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CompaniesAggregateArgs = {
    /**
     * Filter which companies to aggregate.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: Enumerable<companiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompaniesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompaniesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompaniesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompaniesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompaniesMaxAggregateInputType
  }

  export type GetCompaniesAggregateType<T extends CompaniesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanies[P]>
      : GetScalarType<T[P], AggregateCompanies[P]>
  }




  export type CompaniesGroupByArgs = {
    where?: companiesWhereInput
    orderBy?: Enumerable<companiesOrderByWithAggregationInput>
    by: CompaniesScalarFieldEnum[]
    having?: companiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompaniesCountAggregateInputType | true
    _avg?: CompaniesAvgAggregateInputType
    _sum?: CompaniesSumAggregateInputType
    _min?: CompaniesMinAggregateInputType
    _max?: CompaniesMaxAggregateInputType
  }


  export type CompaniesGroupByOutputType = {
    id: number
    name: string
    _count: CompaniesCountAggregateOutputType | null
    _avg: CompaniesAvgAggregateOutputType | null
    _sum: CompaniesSumAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  type GetCompaniesGroupByPayload<T extends CompaniesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CompaniesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompaniesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
            : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
        }
      >
    >


  export type companiesSelect = {
    id?: boolean
    name?: boolean
    branches?: boolean | companies$branchesArgs
    users?: boolean | companies$usersArgs
    _count?: boolean | CompaniesCountOutputTypeArgs
  }


  export type companiesInclude = {
    branches?: boolean | companies$branchesArgs
    users?: boolean | companies$usersArgs
    _count?: boolean | CompaniesCountOutputTypeArgs
  }

  export type companiesGetPayload<S extends boolean | null | undefined | companiesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? companies :
    S extends undefined ? never :
    S extends { include: any } & (companiesArgs | companiesFindManyArgs)
    ? companies  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'branches' ? Array < branchesGetPayload<S['include'][P]>>  :
        P extends 'users' ? Array < usersGetPayload<S['include'][P]>>  :
        P extends '_count' ? CompaniesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (companiesArgs | companiesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'branches' ? Array < branchesGetPayload<S['select'][P]>>  :
        P extends 'users' ? Array < usersGetPayload<S['select'][P]>>  :
        P extends '_count' ? CompaniesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof companies ? companies[P] : never
  } 
      : companies


  type companiesCountArgs = 
    Omit<companiesFindManyArgs, 'select' | 'include'> & {
      select?: CompaniesCountAggregateInputType | true
    }

  export interface companiesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Companies that matches the filter.
     * @param {companiesFindUniqueArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends companiesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, companiesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'companies'> extends True ? Prisma__companiesClient<companiesGetPayload<T>> : Prisma__companiesClient<companiesGetPayload<T> | null, null>

    /**
     * Find one Companies that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {companiesFindUniqueOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends companiesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, companiesFindUniqueOrThrowArgs>
    ): Prisma__companiesClient<companiesGetPayload<T>>

    /**
     * Find the first Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends companiesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, companiesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'companies'> extends True ? Prisma__companiesClient<companiesGetPayload<T>> : Prisma__companiesClient<companiesGetPayload<T> | null, null>

    /**
     * Find the first Companies that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindFirstOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends companiesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, companiesFindFirstOrThrowArgs>
    ): Prisma__companiesClient<companiesGetPayload<T>>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.companies.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.companies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companiesWithIdOnly = await prisma.companies.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends companiesFindManyArgs>(
      args?: SelectSubset<T, companiesFindManyArgs>
    ): Prisma.PrismaPromise<Array<companiesGetPayload<T>>>

    /**
     * Create a Companies.
     * @param {companiesCreateArgs} args - Arguments to create a Companies.
     * @example
     * // Create one Companies
     * const Companies = await prisma.companies.create({
     *   data: {
     *     // ... data to create a Companies
     *   }
     * })
     * 
    **/
    create<T extends companiesCreateArgs>(
      args: SelectSubset<T, companiesCreateArgs>
    ): Prisma__companiesClient<companiesGetPayload<T>>

    /**
     * Create many Companies.
     *     @param {companiesCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const companies = await prisma.companies.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends companiesCreateManyArgs>(
      args?: SelectSubset<T, companiesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Companies.
     * @param {companiesDeleteArgs} args - Arguments to delete one Companies.
     * @example
     * // Delete one Companies
     * const Companies = await prisma.companies.delete({
     *   where: {
     *     // ... filter to delete one Companies
     *   }
     * })
     * 
    **/
    delete<T extends companiesDeleteArgs>(
      args: SelectSubset<T, companiesDeleteArgs>
    ): Prisma__companiesClient<companiesGetPayload<T>>

    /**
     * Update one Companies.
     * @param {companiesUpdateArgs} args - Arguments to update one Companies.
     * @example
     * // Update one Companies
     * const companies = await prisma.companies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends companiesUpdateArgs>(
      args: SelectSubset<T, companiesUpdateArgs>
    ): Prisma__companiesClient<companiesGetPayload<T>>

    /**
     * Delete zero or more Companies.
     * @param {companiesDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.companies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends companiesDeleteManyArgs>(
      args?: SelectSubset<T, companiesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends companiesUpdateManyArgs>(
      args: SelectSubset<T, companiesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Companies.
     * @param {companiesUpsertArgs} args - Arguments to update or create a Companies.
     * @example
     * // Update or create a Companies
     * const companies = await prisma.companies.upsert({
     *   create: {
     *     // ... data to create a Companies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companies we want to update
     *   }
     * })
    **/
    upsert<T extends companiesUpsertArgs>(
      args: SelectSubset<T, companiesUpsertArgs>
    ): Prisma__companiesClient<companiesGetPayload<T>>

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companiesCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.companies.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companiesCountArgs>(
      args?: Subset<T, companiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompaniesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompaniesAggregateArgs>(args: Subset<T, CompaniesAggregateArgs>): Prisma.PrismaPromise<GetCompaniesAggregateType<T>>

    /**
     * Group by Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompaniesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompaniesGroupByArgs['orderBy'] }
        : { orderBy?: CompaniesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompaniesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompaniesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for companies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__companiesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    branches<T extends companies$branchesArgs= {}>(args?: Subset<T, companies$branchesArgs>): Prisma.PrismaPromise<Array<branchesGetPayload<T>>| Null>;

    users<T extends companies$usersArgs= {}>(args?: Subset<T, companies$usersArgs>): Prisma.PrismaPromise<Array<usersGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * companies base type for findUnique actions
   */
  export type companiesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companiesInclude | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }

  /**
   * companies findUnique
   */
  export interface companiesFindUniqueArgs extends companiesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * companies findUniqueOrThrow
   */
  export type companiesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companiesInclude | null
    /**
     * Filter, which companies to fetch.
     */
    where: companiesWhereUniqueInput
  }


  /**
   * companies base type for findFirst actions
   */
  export type companiesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companiesInclude | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: Enumerable<companiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: Enumerable<CompaniesScalarFieldEnum>
  }

  /**
   * companies findFirst
   */
  export interface companiesFindFirstArgs extends companiesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * companies findFirstOrThrow
   */
  export type companiesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companiesInclude | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: Enumerable<companiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: Enumerable<CompaniesScalarFieldEnum>
  }


  /**
   * companies findMany
   */
  export type companiesFindManyArgs = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companiesInclude | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: Enumerable<companiesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: Enumerable<CompaniesScalarFieldEnum>
  }


  /**
   * companies create
   */
  export type companiesCreateArgs = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companiesInclude | null
    /**
     * The data needed to create a companies.
     */
    data: XOR<companiesCreateInput, companiesUncheckedCreateInput>
  }


  /**
   * companies createMany
   */
  export type companiesCreateManyArgs = {
    /**
     * The data used to create many companies.
     */
    data: Enumerable<companiesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * companies update
   */
  export type companiesUpdateArgs = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companiesInclude | null
    /**
     * The data needed to update a companies.
     */
    data: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
    /**
     * Choose, which companies to update.
     */
    where: companiesWhereUniqueInput
  }


  /**
   * companies updateMany
   */
  export type companiesUpdateManyArgs = {
    /**
     * The data used to update companies.
     */
    data: XOR<companiesUpdateManyMutationInput, companiesUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companiesWhereInput
  }


  /**
   * companies upsert
   */
  export type companiesUpsertArgs = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companiesInclude | null
    /**
     * The filter to search for the companies to update in case it exists.
     */
    where: companiesWhereUniqueInput
    /**
     * In case the companies found by the `where` argument doesn't exist, create a new companies with this data.
     */
    create: XOR<companiesCreateInput, companiesUncheckedCreateInput>
    /**
     * In case the companies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companiesUpdateInput, companiesUncheckedUpdateInput>
  }


  /**
   * companies delete
   */
  export type companiesDeleteArgs = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companiesInclude | null
    /**
     * Filter which companies to delete.
     */
    where: companiesWhereUniqueInput
  }


  /**
   * companies deleteMany
   */
  export type companiesDeleteManyArgs = {
    /**
     * Filter which companies to delete
     */
    where?: companiesWhereInput
  }


  /**
   * companies.branches
   */
  export type companies$branchesArgs = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branchesInclude | null
    where?: branchesWhereInput
    orderBy?: Enumerable<branchesOrderByWithRelationInput>
    cursor?: branchesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BranchesScalarFieldEnum>
  }


  /**
   * companies.users
   */
  export type companies$usersArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * companies without action
   */
  export type companiesArgs = {
    /**
     * Select specific fields to fetch from the companies
     */
    select?: companiesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companiesInclude | null
  }



  /**
   * Model menu_categories
   */


  export type AggregateMenu_categories = {
    _count: Menu_categoriesCountAggregateOutputType | null
    _avg: Menu_categoriesAvgAggregateOutputType | null
    _sum: Menu_categoriesSumAggregateOutputType | null
    _min: Menu_categoriesMinAggregateOutputType | null
    _max: Menu_categoriesMaxAggregateOutputType | null
  }

  export type Menu_categoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type Menu_categoriesSumAggregateOutputType = {
    id: number | null
  }

  export type Menu_categoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Menu_categoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type Menu_categoriesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Menu_categoriesAvgAggregateInputType = {
    id?: true
  }

  export type Menu_categoriesSumAggregateInputType = {
    id?: true
  }

  export type Menu_categoriesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Menu_categoriesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Menu_categoriesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Menu_categoriesAggregateArgs = {
    /**
     * Filter which menu_categories to aggregate.
     */
    where?: menu_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_categories to fetch.
     */
    orderBy?: Enumerable<menu_categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menu_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menu_categories
    **/
    _count?: true | Menu_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Menu_categoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Menu_categoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Menu_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Menu_categoriesMaxAggregateInputType
  }

  export type GetMenu_categoriesAggregateType<T extends Menu_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu_categories[P]>
      : GetScalarType<T[P], AggregateMenu_categories[P]>
  }




  export type Menu_categoriesGroupByArgs = {
    where?: menu_categoriesWhereInput
    orderBy?: Enumerable<menu_categoriesOrderByWithAggregationInput>
    by: Menu_categoriesScalarFieldEnum[]
    having?: menu_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Menu_categoriesCountAggregateInputType | true
    _avg?: Menu_categoriesAvgAggregateInputType
    _sum?: Menu_categoriesSumAggregateInputType
    _min?: Menu_categoriesMinAggregateInputType
    _max?: Menu_categoriesMaxAggregateInputType
  }


  export type Menu_categoriesGroupByOutputType = {
    id: number
    name: string
    _count: Menu_categoriesCountAggregateOutputType | null
    _avg: Menu_categoriesAvgAggregateOutputType | null
    _sum: Menu_categoriesSumAggregateOutputType | null
    _min: Menu_categoriesMinAggregateOutputType | null
    _max: Menu_categoriesMaxAggregateOutputType | null
  }

  type GetMenu_categoriesGroupByPayload<T extends Menu_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Menu_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Menu_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Menu_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Menu_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type menu_categoriesSelect = {
    id?: boolean
    name?: boolean
    branches_menucategories_menus?: boolean | menu_categories$branches_menucategories_menusArgs
    _count?: boolean | Menu_categoriesCountOutputTypeArgs
  }


  export type menu_categoriesInclude = {
    branches_menucategories_menus?: boolean | menu_categories$branches_menucategories_menusArgs
    _count?: boolean | Menu_categoriesCountOutputTypeArgs
  }

  export type menu_categoriesGetPayload<S extends boolean | null | undefined | menu_categoriesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? menu_categories :
    S extends undefined ? never :
    S extends { include: any } & (menu_categoriesArgs | menu_categoriesFindManyArgs)
    ? menu_categories  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'branches_menucategories_menus' ? Array < branches_menucategories_menusGetPayload<S['include'][P]>>  :
        P extends '_count' ? Menu_categoriesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (menu_categoriesArgs | menu_categoriesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'branches_menucategories_menus' ? Array < branches_menucategories_menusGetPayload<S['select'][P]>>  :
        P extends '_count' ? Menu_categoriesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof menu_categories ? menu_categories[P] : never
  } 
      : menu_categories


  type menu_categoriesCountArgs = 
    Omit<menu_categoriesFindManyArgs, 'select' | 'include'> & {
      select?: Menu_categoriesCountAggregateInputType | true
    }

  export interface menu_categoriesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Menu_categories that matches the filter.
     * @param {menu_categoriesFindUniqueArgs} args - Arguments to find a Menu_categories
     * @example
     * // Get one Menu_categories
     * const menu_categories = await prisma.menu_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends menu_categoriesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, menu_categoriesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'menu_categories'> extends True ? Prisma__menu_categoriesClient<menu_categoriesGetPayload<T>> : Prisma__menu_categoriesClient<menu_categoriesGetPayload<T> | null, null>

    /**
     * Find one Menu_categories that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {menu_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Menu_categories
     * @example
     * // Get one Menu_categories
     * const menu_categories = await prisma.menu_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends menu_categoriesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, menu_categoriesFindUniqueOrThrowArgs>
    ): Prisma__menu_categoriesClient<menu_categoriesGetPayload<T>>

    /**
     * Find the first Menu_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_categoriesFindFirstArgs} args - Arguments to find a Menu_categories
     * @example
     * // Get one Menu_categories
     * const menu_categories = await prisma.menu_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends menu_categoriesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, menu_categoriesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'menu_categories'> extends True ? Prisma__menu_categoriesClient<menu_categoriesGetPayload<T>> : Prisma__menu_categoriesClient<menu_categoriesGetPayload<T> | null, null>

    /**
     * Find the first Menu_categories that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_categoriesFindFirstOrThrowArgs} args - Arguments to find a Menu_categories
     * @example
     * // Get one Menu_categories
     * const menu_categories = await prisma.menu_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends menu_categoriesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, menu_categoriesFindFirstOrThrowArgs>
    ): Prisma__menu_categoriesClient<menu_categoriesGetPayload<T>>

    /**
     * Find zero or more Menu_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_categoriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menu_categories
     * const menu_categories = await prisma.menu_categories.findMany()
     * 
     * // Get first 10 Menu_categories
     * const menu_categories = await prisma.menu_categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menu_categoriesWithIdOnly = await prisma.menu_categories.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends menu_categoriesFindManyArgs>(
      args?: SelectSubset<T, menu_categoriesFindManyArgs>
    ): Prisma.PrismaPromise<Array<menu_categoriesGetPayload<T>>>

    /**
     * Create a Menu_categories.
     * @param {menu_categoriesCreateArgs} args - Arguments to create a Menu_categories.
     * @example
     * // Create one Menu_categories
     * const Menu_categories = await prisma.menu_categories.create({
     *   data: {
     *     // ... data to create a Menu_categories
     *   }
     * })
     * 
    **/
    create<T extends menu_categoriesCreateArgs>(
      args: SelectSubset<T, menu_categoriesCreateArgs>
    ): Prisma__menu_categoriesClient<menu_categoriesGetPayload<T>>

    /**
     * Create many Menu_categories.
     *     @param {menu_categoriesCreateManyArgs} args - Arguments to create many Menu_categories.
     *     @example
     *     // Create many Menu_categories
     *     const menu_categories = await prisma.menu_categories.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends menu_categoriesCreateManyArgs>(
      args?: SelectSubset<T, menu_categoriesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menu_categories.
     * @param {menu_categoriesDeleteArgs} args - Arguments to delete one Menu_categories.
     * @example
     * // Delete one Menu_categories
     * const Menu_categories = await prisma.menu_categories.delete({
     *   where: {
     *     // ... filter to delete one Menu_categories
     *   }
     * })
     * 
    **/
    delete<T extends menu_categoriesDeleteArgs>(
      args: SelectSubset<T, menu_categoriesDeleteArgs>
    ): Prisma__menu_categoriesClient<menu_categoriesGetPayload<T>>

    /**
     * Update one Menu_categories.
     * @param {menu_categoriesUpdateArgs} args - Arguments to update one Menu_categories.
     * @example
     * // Update one Menu_categories
     * const menu_categories = await prisma.menu_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends menu_categoriesUpdateArgs>(
      args: SelectSubset<T, menu_categoriesUpdateArgs>
    ): Prisma__menu_categoriesClient<menu_categoriesGetPayload<T>>

    /**
     * Delete zero or more Menu_categories.
     * @param {menu_categoriesDeleteManyArgs} args - Arguments to filter Menu_categories to delete.
     * @example
     * // Delete a few Menu_categories
     * const { count } = await prisma.menu_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends menu_categoriesDeleteManyArgs>(
      args?: SelectSubset<T, menu_categoriesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menu_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menu_categories
     * const menu_categories = await prisma.menu_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends menu_categoriesUpdateManyArgs>(
      args: SelectSubset<T, menu_categoriesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu_categories.
     * @param {menu_categoriesUpsertArgs} args - Arguments to update or create a Menu_categories.
     * @example
     * // Update or create a Menu_categories
     * const menu_categories = await prisma.menu_categories.upsert({
     *   create: {
     *     // ... data to create a Menu_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu_categories we want to update
     *   }
     * })
    **/
    upsert<T extends menu_categoriesUpsertArgs>(
      args: SelectSubset<T, menu_categoriesUpsertArgs>
    ): Prisma__menu_categoriesClient<menu_categoriesGetPayload<T>>

    /**
     * Count the number of Menu_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_categoriesCountArgs} args - Arguments to filter Menu_categories to count.
     * @example
     * // Count the number of Menu_categories
     * const count = await prisma.menu_categories.count({
     *   where: {
     *     // ... the filter for the Menu_categories we want to count
     *   }
     * })
    **/
    count<T extends menu_categoriesCountArgs>(
      args?: Subset<T, menu_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Menu_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Menu_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Menu_categoriesAggregateArgs>(args: Subset<T, Menu_categoriesAggregateArgs>): Prisma.PrismaPromise<GetMenu_categoriesAggregateType<T>>

    /**
     * Group by Menu_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Menu_categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Menu_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Menu_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: Menu_categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Menu_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenu_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for menu_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__menu_categoriesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    branches_menucategories_menus<T extends menu_categories$branches_menucategories_menusArgs= {}>(args?: Subset<T, menu_categories$branches_menucategories_menusArgs>): Prisma.PrismaPromise<Array<branches_menucategories_menusGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * menu_categories base type for findUnique actions
   */
  export type menu_categoriesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_categoriesInclude | null
    /**
     * Filter, which menu_categories to fetch.
     */
    where: menu_categoriesWhereUniqueInput
  }

  /**
   * menu_categories findUnique
   */
  export interface menu_categoriesFindUniqueArgs extends menu_categoriesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * menu_categories findUniqueOrThrow
   */
  export type menu_categoriesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_categoriesInclude | null
    /**
     * Filter, which menu_categories to fetch.
     */
    where: menu_categoriesWhereUniqueInput
  }


  /**
   * menu_categories base type for findFirst actions
   */
  export type menu_categoriesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_categoriesInclude | null
    /**
     * Filter, which menu_categories to fetch.
     */
    where?: menu_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_categories to fetch.
     */
    orderBy?: Enumerable<menu_categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_categories.
     */
    cursor?: menu_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_categories.
     */
    distinct?: Enumerable<Menu_categoriesScalarFieldEnum>
  }

  /**
   * menu_categories findFirst
   */
  export interface menu_categoriesFindFirstArgs extends menu_categoriesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * menu_categories findFirstOrThrow
   */
  export type menu_categoriesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_categoriesInclude | null
    /**
     * Filter, which menu_categories to fetch.
     */
    where?: menu_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_categories to fetch.
     */
    orderBy?: Enumerable<menu_categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_categories.
     */
    cursor?: menu_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_categories.
     */
    distinct?: Enumerable<Menu_categoriesScalarFieldEnum>
  }


  /**
   * menu_categories findMany
   */
  export type menu_categoriesFindManyArgs = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_categoriesInclude | null
    /**
     * Filter, which menu_categories to fetch.
     */
    where?: menu_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_categories to fetch.
     */
    orderBy?: Enumerable<menu_categoriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menu_categories.
     */
    cursor?: menu_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_categories.
     */
    skip?: number
    distinct?: Enumerable<Menu_categoriesScalarFieldEnum>
  }


  /**
   * menu_categories create
   */
  export type menu_categoriesCreateArgs = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_categoriesInclude | null
    /**
     * The data needed to create a menu_categories.
     */
    data: XOR<menu_categoriesCreateInput, menu_categoriesUncheckedCreateInput>
  }


  /**
   * menu_categories createMany
   */
  export type menu_categoriesCreateManyArgs = {
    /**
     * The data used to create many menu_categories.
     */
    data: Enumerable<menu_categoriesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * menu_categories update
   */
  export type menu_categoriesUpdateArgs = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_categoriesInclude | null
    /**
     * The data needed to update a menu_categories.
     */
    data: XOR<menu_categoriesUpdateInput, menu_categoriesUncheckedUpdateInput>
    /**
     * Choose, which menu_categories to update.
     */
    where: menu_categoriesWhereUniqueInput
  }


  /**
   * menu_categories updateMany
   */
  export type menu_categoriesUpdateManyArgs = {
    /**
     * The data used to update menu_categories.
     */
    data: XOR<menu_categoriesUpdateManyMutationInput, menu_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which menu_categories to update
     */
    where?: menu_categoriesWhereInput
  }


  /**
   * menu_categories upsert
   */
  export type menu_categoriesUpsertArgs = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_categoriesInclude | null
    /**
     * The filter to search for the menu_categories to update in case it exists.
     */
    where: menu_categoriesWhereUniqueInput
    /**
     * In case the menu_categories found by the `where` argument doesn't exist, create a new menu_categories with this data.
     */
    create: XOR<menu_categoriesCreateInput, menu_categoriesUncheckedCreateInput>
    /**
     * In case the menu_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menu_categoriesUpdateInput, menu_categoriesUncheckedUpdateInput>
  }


  /**
   * menu_categories delete
   */
  export type menu_categoriesDeleteArgs = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_categoriesInclude | null
    /**
     * Filter which menu_categories to delete.
     */
    where: menu_categoriesWhereUniqueInput
  }


  /**
   * menu_categories deleteMany
   */
  export type menu_categoriesDeleteManyArgs = {
    /**
     * Filter which menu_categories to delete
     */
    where?: menu_categoriesWhereInput
  }


  /**
   * menu_categories.branches_menucategories_menus
   */
  export type menu_categories$branches_menucategories_menusArgs = {
    /**
     * Select specific fields to fetch from the branches_menucategories_menus
     */
    select?: branches_menucategories_menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_menucategories_menusInclude | null
    where?: branches_menucategories_menusWhereInput
    orderBy?: Enumerable<branches_menucategories_menusOrderByWithRelationInput>
    cursor?: branches_menucategories_menusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Branches_menucategories_menusScalarFieldEnum>
  }


  /**
   * menu_categories without action
   */
  export type menu_categoriesArgs = {
    /**
     * Select specific fields to fetch from the menu_categories
     */
    select?: menu_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_categoriesInclude | null
  }



  /**
   * Model menus
   */


  export type AggregateMenus = {
    _count: MenusCountAggregateOutputType | null
    _avg: MenusAvgAggregateOutputType | null
    _sum: MenusSumAggregateOutputType | null
    _min: MenusMinAggregateOutputType | null
    _max: MenusMaxAggregateOutputType | null
  }

  export type MenusAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type MenusSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type MenusMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    asset_url: string | null
    description: string | null
  }

  export type MenusMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    asset_url: string | null
    description: string | null
  }

  export type MenusCountAggregateOutputType = {
    id: number
    name: number
    price: number
    asset_url: number
    description: number
    _all: number
  }


  export type MenusAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type MenusSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type MenusMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    asset_url?: true
    description?: true
  }

  export type MenusMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    asset_url?: true
    description?: true
  }

  export type MenusCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    asset_url?: true
    description?: true
    _all?: true
  }

  export type MenusAggregateArgs = {
    /**
     * Filter which menus to aggregate.
     */
    where?: menusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: Enumerable<menusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menus
    **/
    _count?: true | MenusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenusMaxAggregateInputType
  }

  export type GetMenusAggregateType<T extends MenusAggregateArgs> = {
        [P in keyof T & keyof AggregateMenus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenus[P]>
      : GetScalarType<T[P], AggregateMenus[P]>
  }




  export type MenusGroupByArgs = {
    where?: menusWhereInput
    orderBy?: Enumerable<menusOrderByWithAggregationInput>
    by: MenusScalarFieldEnum[]
    having?: menusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenusCountAggregateInputType | true
    _avg?: MenusAvgAggregateInputType
    _sum?: MenusSumAggregateInputType
    _min?: MenusMinAggregateInputType
    _max?: MenusMaxAggregateInputType
  }


  export type MenusGroupByOutputType = {
    id: number
    name: string
    price: number
    asset_url: string | null
    description: string | null
    _count: MenusCountAggregateOutputType | null
    _avg: MenusAvgAggregateOutputType | null
    _sum: MenusSumAggregateOutputType | null
    _min: MenusMinAggregateOutputType | null
    _max: MenusMaxAggregateOutputType | null
  }

  type GetMenusGroupByPayload<T extends MenusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MenusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenusGroupByOutputType[P]>
            : GetScalarType<T[P], MenusGroupByOutputType[P]>
        }
      >
    >


  export type menusSelect = {
    id?: boolean
    name?: boolean
    price?: boolean
    asset_url?: boolean
    description?: boolean
    branches_menucategories_menus?: boolean | menus$branches_menucategories_menusArgs
    menus_addoncats_addons?: boolean | menus$menus_addoncats_addonsArgs
    _count?: boolean | MenusCountOutputTypeArgs
  }


  export type menusInclude = {
    branches_menucategories_menus?: boolean | menus$branches_menucategories_menusArgs
    menus_addoncats_addons?: boolean | menus$menus_addoncats_addonsArgs
    _count?: boolean | MenusCountOutputTypeArgs
  }

  export type menusGetPayload<S extends boolean | null | undefined | menusArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? menus :
    S extends undefined ? never :
    S extends { include: any } & (menusArgs | menusFindManyArgs)
    ? menus  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'branches_menucategories_menus' ? Array < branches_menucategories_menusGetPayload<S['include'][P]>>  :
        P extends 'menus_addoncats_addons' ? Array < menu_addonsGetPayload<S['include'][P]>>  :
        P extends '_count' ? MenusCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (menusArgs | menusFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'branches_menucategories_menus' ? Array < branches_menucategories_menusGetPayload<S['select'][P]>>  :
        P extends 'menus_addoncats_addons' ? Array < menu_addonsGetPayload<S['select'][P]>>  :
        P extends '_count' ? MenusCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof menus ? menus[P] : never
  } 
      : menus


  type menusCountArgs = 
    Omit<menusFindManyArgs, 'select' | 'include'> & {
      select?: MenusCountAggregateInputType | true
    }

  export interface menusDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Menus that matches the filter.
     * @param {menusFindUniqueArgs} args - Arguments to find a Menus
     * @example
     * // Get one Menus
     * const menus = await prisma.menus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends menusFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, menusFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'menus'> extends True ? Prisma__menusClient<menusGetPayload<T>> : Prisma__menusClient<menusGetPayload<T> | null, null>

    /**
     * Find one Menus that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {menusFindUniqueOrThrowArgs} args - Arguments to find a Menus
     * @example
     * // Get one Menus
     * const menus = await prisma.menus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends menusFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, menusFindUniqueOrThrowArgs>
    ): Prisma__menusClient<menusGetPayload<T>>

    /**
     * Find the first Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menusFindFirstArgs} args - Arguments to find a Menus
     * @example
     * // Get one Menus
     * const menus = await prisma.menus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends menusFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, menusFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'menus'> extends True ? Prisma__menusClient<menusGetPayload<T>> : Prisma__menusClient<menusGetPayload<T> | null, null>

    /**
     * Find the first Menus that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menusFindFirstOrThrowArgs} args - Arguments to find a Menus
     * @example
     * // Get one Menus
     * const menus = await prisma.menus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends menusFindFirstOrThrowArgs>(
      args?: SelectSubset<T, menusFindFirstOrThrowArgs>
    ): Prisma__menusClient<menusGetPayload<T>>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menus.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menusWithIdOnly = await prisma.menus.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends menusFindManyArgs>(
      args?: SelectSubset<T, menusFindManyArgs>
    ): Prisma.PrismaPromise<Array<menusGetPayload<T>>>

    /**
     * Create a Menus.
     * @param {menusCreateArgs} args - Arguments to create a Menus.
     * @example
     * // Create one Menus
     * const Menus = await prisma.menus.create({
     *   data: {
     *     // ... data to create a Menus
     *   }
     * })
     * 
    **/
    create<T extends menusCreateArgs>(
      args: SelectSubset<T, menusCreateArgs>
    ): Prisma__menusClient<menusGetPayload<T>>

    /**
     * Create many Menus.
     *     @param {menusCreateManyArgs} args - Arguments to create many Menus.
     *     @example
     *     // Create many Menus
     *     const menus = await prisma.menus.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends menusCreateManyArgs>(
      args?: SelectSubset<T, menusCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menus.
     * @param {menusDeleteArgs} args - Arguments to delete one Menus.
     * @example
     * // Delete one Menus
     * const Menus = await prisma.menus.delete({
     *   where: {
     *     // ... filter to delete one Menus
     *   }
     * })
     * 
    **/
    delete<T extends menusDeleteArgs>(
      args: SelectSubset<T, menusDeleteArgs>
    ): Prisma__menusClient<menusGetPayload<T>>

    /**
     * Update one Menus.
     * @param {menusUpdateArgs} args - Arguments to update one Menus.
     * @example
     * // Update one Menus
     * const menus = await prisma.menus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends menusUpdateArgs>(
      args: SelectSubset<T, menusUpdateArgs>
    ): Prisma__menusClient<menusGetPayload<T>>

    /**
     * Delete zero or more Menus.
     * @param {menusDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends menusDeleteManyArgs>(
      args?: SelectSubset<T, menusDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menus = await prisma.menus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends menusUpdateManyArgs>(
      args: SelectSubset<T, menusUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menus.
     * @param {menusUpsertArgs} args - Arguments to update or create a Menus.
     * @example
     * // Update or create a Menus
     * const menus = await prisma.menus.upsert({
     *   create: {
     *     // ... data to create a Menus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menus we want to update
     *   }
     * })
    **/
    upsert<T extends menusUpsertArgs>(
      args: SelectSubset<T, menusUpsertArgs>
    ): Prisma__menusClient<menusGetPayload<T>>

    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menusCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menus.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends menusCountArgs>(
      args?: Subset<T, menusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenusAggregateArgs>(args: Subset<T, MenusAggregateArgs>): Prisma.PrismaPromise<GetMenusAggregateType<T>>

    /**
     * Group by Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenusGroupByArgs['orderBy'] }
        : { orderBy?: MenusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for menus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__menusClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    branches_menucategories_menus<T extends menus$branches_menucategories_menusArgs= {}>(args?: Subset<T, menus$branches_menucategories_menusArgs>): Prisma.PrismaPromise<Array<branches_menucategories_menusGetPayload<T>>| Null>;

    menus_addoncats_addons<T extends menus$menus_addoncats_addonsArgs= {}>(args?: Subset<T, menus$menus_addoncats_addonsArgs>): Prisma.PrismaPromise<Array<menu_addonsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * menus base type for findUnique actions
   */
  export type menusFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the menus
     */
    select?: menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menusInclude | null
    /**
     * Filter, which menus to fetch.
     */
    where: menusWhereUniqueInput
  }

  /**
   * menus findUnique
   */
  export interface menusFindUniqueArgs extends menusFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * menus findUniqueOrThrow
   */
  export type menusFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the menus
     */
    select?: menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menusInclude | null
    /**
     * Filter, which menus to fetch.
     */
    where: menusWhereUniqueInput
  }


  /**
   * menus base type for findFirst actions
   */
  export type menusFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the menus
     */
    select?: menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menusInclude | null
    /**
     * Filter, which menus to fetch.
     */
    where?: menusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: Enumerable<menusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: Enumerable<MenusScalarFieldEnum>
  }

  /**
   * menus findFirst
   */
  export interface menusFindFirstArgs extends menusFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * menus findFirstOrThrow
   */
  export type menusFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the menus
     */
    select?: menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menusInclude | null
    /**
     * Filter, which menus to fetch.
     */
    where?: menusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: Enumerable<menusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: Enumerable<MenusScalarFieldEnum>
  }


  /**
   * menus findMany
   */
  export type menusFindManyArgs = {
    /**
     * Select specific fields to fetch from the menus
     */
    select?: menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menusInclude | null
    /**
     * Filter, which menus to fetch.
     */
    where?: menusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: Enumerable<menusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menus.
     */
    cursor?: menusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    distinct?: Enumerable<MenusScalarFieldEnum>
  }


  /**
   * menus create
   */
  export type menusCreateArgs = {
    /**
     * Select specific fields to fetch from the menus
     */
    select?: menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menusInclude | null
    /**
     * The data needed to create a menus.
     */
    data: XOR<menusCreateInput, menusUncheckedCreateInput>
  }


  /**
   * menus createMany
   */
  export type menusCreateManyArgs = {
    /**
     * The data used to create many menus.
     */
    data: Enumerable<menusCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * menus update
   */
  export type menusUpdateArgs = {
    /**
     * Select specific fields to fetch from the menus
     */
    select?: menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menusInclude | null
    /**
     * The data needed to update a menus.
     */
    data: XOR<menusUpdateInput, menusUncheckedUpdateInput>
    /**
     * Choose, which menus to update.
     */
    where: menusWhereUniqueInput
  }


  /**
   * menus updateMany
   */
  export type menusUpdateManyArgs = {
    /**
     * The data used to update menus.
     */
    data: XOR<menusUpdateManyMutationInput, menusUncheckedUpdateManyInput>
    /**
     * Filter which menus to update
     */
    where?: menusWhereInput
  }


  /**
   * menus upsert
   */
  export type menusUpsertArgs = {
    /**
     * Select specific fields to fetch from the menus
     */
    select?: menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menusInclude | null
    /**
     * The filter to search for the menus to update in case it exists.
     */
    where: menusWhereUniqueInput
    /**
     * In case the menus found by the `where` argument doesn't exist, create a new menus with this data.
     */
    create: XOR<menusCreateInput, menusUncheckedCreateInput>
    /**
     * In case the menus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menusUpdateInput, menusUncheckedUpdateInput>
  }


  /**
   * menus delete
   */
  export type menusDeleteArgs = {
    /**
     * Select specific fields to fetch from the menus
     */
    select?: menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menusInclude | null
    /**
     * Filter which menus to delete.
     */
    where: menusWhereUniqueInput
  }


  /**
   * menus deleteMany
   */
  export type menusDeleteManyArgs = {
    /**
     * Filter which menus to delete
     */
    where?: menusWhereInput
  }


  /**
   * menus.branches_menucategories_menus
   */
  export type menus$branches_menucategories_menusArgs = {
    /**
     * Select specific fields to fetch from the branches_menucategories_menus
     */
    select?: branches_menucategories_menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branches_menucategories_menusInclude | null
    where?: branches_menucategories_menusWhereInput
    orderBy?: Enumerable<branches_menucategories_menusOrderByWithRelationInput>
    cursor?: branches_menucategories_menusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Branches_menucategories_menusScalarFieldEnum>
  }


  /**
   * menus.menus_addoncats_addons
   */
  export type menus$menus_addoncats_addonsArgs = {
    /**
     * Select specific fields to fetch from the menu_addons
     */
    select?: menu_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_addonsInclude | null
    where?: menu_addonsWhereInput
    orderBy?: Enumerable<menu_addonsOrderByWithRelationInput>
    cursor?: menu_addonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Menu_addonsScalarFieldEnum>
  }


  /**
   * menus without action
   */
  export type menusArgs = {
    /**
     * Select specific fields to fetch from the menus
     */
    select?: menusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menusInclude | null
  }



  /**
   * Model menu_addons
   */


  export type AggregateMenu_addons = {
    _count: Menu_addonsCountAggregateOutputType | null
    _avg: Menu_addonsAvgAggregateOutputType | null
    _sum: Menu_addonsSumAggregateOutputType | null
    _min: Menu_addonsMinAggregateOutputType | null
    _max: Menu_addonsMaxAggregateOutputType | null
  }

  export type Menu_addonsAvgAggregateOutputType = {
    id: number | null
    menu_id: number | null
    addon_id: number | null
    price: number | null
  }

  export type Menu_addonsSumAggregateOutputType = {
    id: number | null
    menu_id: number | null
    addon_id: number | null
    price: number | null
  }

  export type Menu_addonsMinAggregateOutputType = {
    id: number | null
    menu_id: number | null
    addon_id: number | null
    price: number | null
  }

  export type Menu_addonsMaxAggregateOutputType = {
    id: number | null
    menu_id: number | null
    addon_id: number | null
    price: number | null
  }

  export type Menu_addonsCountAggregateOutputType = {
    id: number
    menu_id: number
    addon_id: number
    price: number
    _all: number
  }


  export type Menu_addonsAvgAggregateInputType = {
    id?: true
    menu_id?: true
    addon_id?: true
    price?: true
  }

  export type Menu_addonsSumAggregateInputType = {
    id?: true
    menu_id?: true
    addon_id?: true
    price?: true
  }

  export type Menu_addonsMinAggregateInputType = {
    id?: true
    menu_id?: true
    addon_id?: true
    price?: true
  }

  export type Menu_addonsMaxAggregateInputType = {
    id?: true
    menu_id?: true
    addon_id?: true
    price?: true
  }

  export type Menu_addonsCountAggregateInputType = {
    id?: true
    menu_id?: true
    addon_id?: true
    price?: true
    _all?: true
  }

  export type Menu_addonsAggregateArgs = {
    /**
     * Filter which menu_addons to aggregate.
     */
    where?: menu_addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_addons to fetch.
     */
    orderBy?: Enumerable<menu_addonsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menu_addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menu_addons
    **/
    _count?: true | Menu_addonsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Menu_addonsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Menu_addonsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Menu_addonsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Menu_addonsMaxAggregateInputType
  }

  export type GetMenu_addonsAggregateType<T extends Menu_addonsAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu_addons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu_addons[P]>
      : GetScalarType<T[P], AggregateMenu_addons[P]>
  }




  export type Menu_addonsGroupByArgs = {
    where?: menu_addonsWhereInput
    orderBy?: Enumerable<menu_addonsOrderByWithAggregationInput>
    by: Menu_addonsScalarFieldEnum[]
    having?: menu_addonsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Menu_addonsCountAggregateInputType | true
    _avg?: Menu_addonsAvgAggregateInputType
    _sum?: Menu_addonsSumAggregateInputType
    _min?: Menu_addonsMinAggregateInputType
    _max?: Menu_addonsMaxAggregateInputType
  }


  export type Menu_addonsGroupByOutputType = {
    id: number
    menu_id: number
    addon_id: number
    price: number
    _count: Menu_addonsCountAggregateOutputType | null
    _avg: Menu_addonsAvgAggregateOutputType | null
    _sum: Menu_addonsSumAggregateOutputType | null
    _min: Menu_addonsMinAggregateOutputType | null
    _max: Menu_addonsMaxAggregateOutputType | null
  }

  type GetMenu_addonsGroupByPayload<T extends Menu_addonsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Menu_addonsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Menu_addonsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Menu_addonsGroupByOutputType[P]>
            : GetScalarType<T[P], Menu_addonsGroupByOutputType[P]>
        }
      >
    >


  export type menu_addonsSelect = {
    id?: boolean
    menu_id?: boolean
    addon_id?: boolean
    price?: boolean
    menu?: boolean | menusArgs
    addon?: boolean | addonsArgs
    addon_categories?: boolean | menu_addons$addon_categoriesArgs
    _count?: boolean | Menu_addonsCountOutputTypeArgs
  }


  export type menu_addonsInclude = {
    menu?: boolean | menusArgs
    addon?: boolean | addonsArgs
    addon_categories?: boolean | menu_addons$addon_categoriesArgs
    _count?: boolean | Menu_addonsCountOutputTypeArgs
  }

  export type menu_addonsGetPayload<S extends boolean | null | undefined | menu_addonsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? menu_addons :
    S extends undefined ? never :
    S extends { include: any } & (menu_addonsArgs | menu_addonsFindManyArgs)
    ? menu_addons  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'menu' ? menusGetPayload<S['include'][P]> :
        P extends 'addon' ? addonsGetPayload<S['include'][P]> :
        P extends 'addon_categories' ? Array < addon_categoriesGetPayload<S['include'][P]>>  :
        P extends '_count' ? Menu_addonsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (menu_addonsArgs | menu_addonsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'menu' ? menusGetPayload<S['select'][P]> :
        P extends 'addon' ? addonsGetPayload<S['select'][P]> :
        P extends 'addon_categories' ? Array < addon_categoriesGetPayload<S['select'][P]>>  :
        P extends '_count' ? Menu_addonsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof menu_addons ? menu_addons[P] : never
  } 
      : menu_addons


  type menu_addonsCountArgs = 
    Omit<menu_addonsFindManyArgs, 'select' | 'include'> & {
      select?: Menu_addonsCountAggregateInputType | true
    }

  export interface menu_addonsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Menu_addons that matches the filter.
     * @param {menu_addonsFindUniqueArgs} args - Arguments to find a Menu_addons
     * @example
     * // Get one Menu_addons
     * const menu_addons = await prisma.menu_addons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends menu_addonsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, menu_addonsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'menu_addons'> extends True ? Prisma__menu_addonsClient<menu_addonsGetPayload<T>> : Prisma__menu_addonsClient<menu_addonsGetPayload<T> | null, null>

    /**
     * Find one Menu_addons that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {menu_addonsFindUniqueOrThrowArgs} args - Arguments to find a Menu_addons
     * @example
     * // Get one Menu_addons
     * const menu_addons = await prisma.menu_addons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends menu_addonsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, menu_addonsFindUniqueOrThrowArgs>
    ): Prisma__menu_addonsClient<menu_addonsGetPayload<T>>

    /**
     * Find the first Menu_addons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_addonsFindFirstArgs} args - Arguments to find a Menu_addons
     * @example
     * // Get one Menu_addons
     * const menu_addons = await prisma.menu_addons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends menu_addonsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, menu_addonsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'menu_addons'> extends True ? Prisma__menu_addonsClient<menu_addonsGetPayload<T>> : Prisma__menu_addonsClient<menu_addonsGetPayload<T> | null, null>

    /**
     * Find the first Menu_addons that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_addonsFindFirstOrThrowArgs} args - Arguments to find a Menu_addons
     * @example
     * // Get one Menu_addons
     * const menu_addons = await prisma.menu_addons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends menu_addonsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, menu_addonsFindFirstOrThrowArgs>
    ): Prisma__menu_addonsClient<menu_addonsGetPayload<T>>

    /**
     * Find zero or more Menu_addons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_addonsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menu_addons
     * const menu_addons = await prisma.menu_addons.findMany()
     * 
     * // Get first 10 Menu_addons
     * const menu_addons = await prisma.menu_addons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menu_addonsWithIdOnly = await prisma.menu_addons.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends menu_addonsFindManyArgs>(
      args?: SelectSubset<T, menu_addonsFindManyArgs>
    ): Prisma.PrismaPromise<Array<menu_addonsGetPayload<T>>>

    /**
     * Create a Menu_addons.
     * @param {menu_addonsCreateArgs} args - Arguments to create a Menu_addons.
     * @example
     * // Create one Menu_addons
     * const Menu_addons = await prisma.menu_addons.create({
     *   data: {
     *     // ... data to create a Menu_addons
     *   }
     * })
     * 
    **/
    create<T extends menu_addonsCreateArgs>(
      args: SelectSubset<T, menu_addonsCreateArgs>
    ): Prisma__menu_addonsClient<menu_addonsGetPayload<T>>

    /**
     * Create many Menu_addons.
     *     @param {menu_addonsCreateManyArgs} args - Arguments to create many Menu_addons.
     *     @example
     *     // Create many Menu_addons
     *     const menu_addons = await prisma.menu_addons.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends menu_addonsCreateManyArgs>(
      args?: SelectSubset<T, menu_addonsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menu_addons.
     * @param {menu_addonsDeleteArgs} args - Arguments to delete one Menu_addons.
     * @example
     * // Delete one Menu_addons
     * const Menu_addons = await prisma.menu_addons.delete({
     *   where: {
     *     // ... filter to delete one Menu_addons
     *   }
     * })
     * 
    **/
    delete<T extends menu_addonsDeleteArgs>(
      args: SelectSubset<T, menu_addonsDeleteArgs>
    ): Prisma__menu_addonsClient<menu_addonsGetPayload<T>>

    /**
     * Update one Menu_addons.
     * @param {menu_addonsUpdateArgs} args - Arguments to update one Menu_addons.
     * @example
     * // Update one Menu_addons
     * const menu_addons = await prisma.menu_addons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends menu_addonsUpdateArgs>(
      args: SelectSubset<T, menu_addonsUpdateArgs>
    ): Prisma__menu_addonsClient<menu_addonsGetPayload<T>>

    /**
     * Delete zero or more Menu_addons.
     * @param {menu_addonsDeleteManyArgs} args - Arguments to filter Menu_addons to delete.
     * @example
     * // Delete a few Menu_addons
     * const { count } = await prisma.menu_addons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends menu_addonsDeleteManyArgs>(
      args?: SelectSubset<T, menu_addonsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menu_addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_addonsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menu_addons
     * const menu_addons = await prisma.menu_addons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends menu_addonsUpdateManyArgs>(
      args: SelectSubset<T, menu_addonsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu_addons.
     * @param {menu_addonsUpsertArgs} args - Arguments to update or create a Menu_addons.
     * @example
     * // Update or create a Menu_addons
     * const menu_addons = await prisma.menu_addons.upsert({
     *   create: {
     *     // ... data to create a Menu_addons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu_addons we want to update
     *   }
     * })
    **/
    upsert<T extends menu_addonsUpsertArgs>(
      args: SelectSubset<T, menu_addonsUpsertArgs>
    ): Prisma__menu_addonsClient<menu_addonsGetPayload<T>>

    /**
     * Count the number of Menu_addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_addonsCountArgs} args - Arguments to filter Menu_addons to count.
     * @example
     * // Count the number of Menu_addons
     * const count = await prisma.menu_addons.count({
     *   where: {
     *     // ... the filter for the Menu_addons we want to count
     *   }
     * })
    **/
    count<T extends menu_addonsCountArgs>(
      args?: Subset<T, menu_addonsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Menu_addonsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu_addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Menu_addonsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Menu_addonsAggregateArgs>(args: Subset<T, Menu_addonsAggregateArgs>): Prisma.PrismaPromise<GetMenu_addonsAggregateType<T>>

    /**
     * Group by Menu_addons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Menu_addonsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Menu_addonsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Menu_addonsGroupByArgs['orderBy'] }
        : { orderBy?: Menu_addonsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Menu_addonsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenu_addonsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for menu_addons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__menu_addonsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    menu<T extends menusArgs= {}>(args?: Subset<T, menusArgs>): Prisma__menusClient<menusGetPayload<T> | Null>;

    addon<T extends addonsArgs= {}>(args?: Subset<T, addonsArgs>): Prisma__addonsClient<addonsGetPayload<T> | Null>;

    addon_categories<T extends menu_addons$addon_categoriesArgs= {}>(args?: Subset<T, menu_addons$addon_categoriesArgs>): Prisma.PrismaPromise<Array<addon_categoriesGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * menu_addons base type for findUnique actions
   */
  export type menu_addonsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the menu_addons
     */
    select?: menu_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_addonsInclude | null
    /**
     * Filter, which menu_addons to fetch.
     */
    where: menu_addonsWhereUniqueInput
  }

  /**
   * menu_addons findUnique
   */
  export interface menu_addonsFindUniqueArgs extends menu_addonsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * menu_addons findUniqueOrThrow
   */
  export type menu_addonsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the menu_addons
     */
    select?: menu_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_addonsInclude | null
    /**
     * Filter, which menu_addons to fetch.
     */
    where: menu_addonsWhereUniqueInput
  }


  /**
   * menu_addons base type for findFirst actions
   */
  export type menu_addonsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the menu_addons
     */
    select?: menu_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_addonsInclude | null
    /**
     * Filter, which menu_addons to fetch.
     */
    where?: menu_addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_addons to fetch.
     */
    orderBy?: Enumerable<menu_addonsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_addons.
     */
    cursor?: menu_addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_addons.
     */
    distinct?: Enumerable<Menu_addonsScalarFieldEnum>
  }

  /**
   * menu_addons findFirst
   */
  export interface menu_addonsFindFirstArgs extends menu_addonsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * menu_addons findFirstOrThrow
   */
  export type menu_addonsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the menu_addons
     */
    select?: menu_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_addonsInclude | null
    /**
     * Filter, which menu_addons to fetch.
     */
    where?: menu_addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_addons to fetch.
     */
    orderBy?: Enumerable<menu_addonsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_addons.
     */
    cursor?: menu_addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_addons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_addons.
     */
    distinct?: Enumerable<Menu_addonsScalarFieldEnum>
  }


  /**
   * menu_addons findMany
   */
  export type menu_addonsFindManyArgs = {
    /**
     * Select specific fields to fetch from the menu_addons
     */
    select?: menu_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_addonsInclude | null
    /**
     * Filter, which menu_addons to fetch.
     */
    where?: menu_addonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_addons to fetch.
     */
    orderBy?: Enumerable<menu_addonsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menu_addons.
     */
    cursor?: menu_addonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_addons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_addons.
     */
    skip?: number
    distinct?: Enumerable<Menu_addonsScalarFieldEnum>
  }


  /**
   * menu_addons create
   */
  export type menu_addonsCreateArgs = {
    /**
     * Select specific fields to fetch from the menu_addons
     */
    select?: menu_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_addonsInclude | null
    /**
     * The data needed to create a menu_addons.
     */
    data: XOR<menu_addonsCreateInput, menu_addonsUncheckedCreateInput>
  }


  /**
   * menu_addons createMany
   */
  export type menu_addonsCreateManyArgs = {
    /**
     * The data used to create many menu_addons.
     */
    data: Enumerable<menu_addonsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * menu_addons update
   */
  export type menu_addonsUpdateArgs = {
    /**
     * Select specific fields to fetch from the menu_addons
     */
    select?: menu_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_addonsInclude | null
    /**
     * The data needed to update a menu_addons.
     */
    data: XOR<menu_addonsUpdateInput, menu_addonsUncheckedUpdateInput>
    /**
     * Choose, which menu_addons to update.
     */
    where: menu_addonsWhereUniqueInput
  }


  /**
   * menu_addons updateMany
   */
  export type menu_addonsUpdateManyArgs = {
    /**
     * The data used to update menu_addons.
     */
    data: XOR<menu_addonsUpdateManyMutationInput, menu_addonsUncheckedUpdateManyInput>
    /**
     * Filter which menu_addons to update
     */
    where?: menu_addonsWhereInput
  }


  /**
   * menu_addons upsert
   */
  export type menu_addonsUpsertArgs = {
    /**
     * Select specific fields to fetch from the menu_addons
     */
    select?: menu_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_addonsInclude | null
    /**
     * The filter to search for the menu_addons to update in case it exists.
     */
    where: menu_addonsWhereUniqueInput
    /**
     * In case the menu_addons found by the `where` argument doesn't exist, create a new menu_addons with this data.
     */
    create: XOR<menu_addonsCreateInput, menu_addonsUncheckedCreateInput>
    /**
     * In case the menu_addons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menu_addonsUpdateInput, menu_addonsUncheckedUpdateInput>
  }


  /**
   * menu_addons delete
   */
  export type menu_addonsDeleteArgs = {
    /**
     * Select specific fields to fetch from the menu_addons
     */
    select?: menu_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_addonsInclude | null
    /**
     * Filter which menu_addons to delete.
     */
    where: menu_addonsWhereUniqueInput
  }


  /**
   * menu_addons deleteMany
   */
  export type menu_addonsDeleteManyArgs = {
    /**
     * Filter which menu_addons to delete
     */
    where?: menu_addonsWhereInput
  }


  /**
   * menu_addons.addon_categories
   */
  export type menu_addons$addon_categoriesArgs = {
    /**
     * Select specific fields to fetch from the addon_categories
     */
    select?: addon_categoriesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addon_categoriesInclude | null
    where?: addon_categoriesWhereInput
    orderBy?: Enumerable<addon_categoriesOrderByWithRelationInput>
    cursor?: addon_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Addon_categoriesScalarFieldEnum>
  }


  /**
   * menu_addons without action
   */
  export type menu_addonsArgs = {
    /**
     * Select specific fields to fetch from the menu_addons
     */
    select?: menu_addonsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: menu_addonsInclude | null
  }



  /**
   * Model townships
   */


  export type AggregateTownships = {
    _count: TownshipsCountAggregateOutputType | null
    _avg: TownshipsAvgAggregateOutputType | null
    _sum: TownshipsSumAggregateOutputType | null
    _min: TownshipsMinAggregateOutputType | null
    _max: TownshipsMaxAggregateOutputType | null
  }

  export type TownshipsAvgAggregateOutputType = {
    id: number | null
  }

  export type TownshipsSumAggregateOutputType = {
    id: number | null
  }

  export type TownshipsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TownshipsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TownshipsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TownshipsAvgAggregateInputType = {
    id?: true
  }

  export type TownshipsSumAggregateInputType = {
    id?: true
  }

  export type TownshipsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TownshipsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TownshipsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TownshipsAggregateArgs = {
    /**
     * Filter which townships to aggregate.
     */
    where?: townshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of townships to fetch.
     */
    orderBy?: Enumerable<townshipsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: townshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` townships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` townships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned townships
    **/
    _count?: true | TownshipsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TownshipsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TownshipsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TownshipsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TownshipsMaxAggregateInputType
  }

  export type GetTownshipsAggregateType<T extends TownshipsAggregateArgs> = {
        [P in keyof T & keyof AggregateTownships]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTownships[P]>
      : GetScalarType<T[P], AggregateTownships[P]>
  }




  export type TownshipsGroupByArgs = {
    where?: townshipsWhereInput
    orderBy?: Enumerable<townshipsOrderByWithAggregationInput>
    by: TownshipsScalarFieldEnum[]
    having?: townshipsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TownshipsCountAggregateInputType | true
    _avg?: TownshipsAvgAggregateInputType
    _sum?: TownshipsSumAggregateInputType
    _min?: TownshipsMinAggregateInputType
    _max?: TownshipsMaxAggregateInputType
  }


  export type TownshipsGroupByOutputType = {
    id: number
    name: string
    _count: TownshipsCountAggregateOutputType | null
    _avg: TownshipsAvgAggregateOutputType | null
    _sum: TownshipsSumAggregateOutputType | null
    _min: TownshipsMinAggregateOutputType | null
    _max: TownshipsMaxAggregateOutputType | null
  }

  type GetTownshipsGroupByPayload<T extends TownshipsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TownshipsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TownshipsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TownshipsGroupByOutputType[P]>
            : GetScalarType<T[P], TownshipsGroupByOutputType[P]>
        }
      >
    >


  export type townshipsSelect = {
    id?: boolean
    name?: boolean
    branches?: boolean | townships$branchesArgs
    _count?: boolean | TownshipsCountOutputTypeArgs
  }


  export type townshipsInclude = {
    branches?: boolean | townships$branchesArgs
    _count?: boolean | TownshipsCountOutputTypeArgs
  }

  export type townshipsGetPayload<S extends boolean | null | undefined | townshipsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? townships :
    S extends undefined ? never :
    S extends { include: any } & (townshipsArgs | townshipsFindManyArgs)
    ? townships  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'branches' ? Array < branchesGetPayload<S['include'][P]>>  :
        P extends '_count' ? TownshipsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (townshipsArgs | townshipsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'branches' ? Array < branchesGetPayload<S['select'][P]>>  :
        P extends '_count' ? TownshipsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof townships ? townships[P] : never
  } 
      : townships


  type townshipsCountArgs = 
    Omit<townshipsFindManyArgs, 'select' | 'include'> & {
      select?: TownshipsCountAggregateInputType | true
    }

  export interface townshipsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Townships that matches the filter.
     * @param {townshipsFindUniqueArgs} args - Arguments to find a Townships
     * @example
     * // Get one Townships
     * const townships = await prisma.townships.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends townshipsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, townshipsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'townships'> extends True ? Prisma__townshipsClient<townshipsGetPayload<T>> : Prisma__townshipsClient<townshipsGetPayload<T> | null, null>

    /**
     * Find one Townships that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {townshipsFindUniqueOrThrowArgs} args - Arguments to find a Townships
     * @example
     * // Get one Townships
     * const townships = await prisma.townships.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends townshipsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, townshipsFindUniqueOrThrowArgs>
    ): Prisma__townshipsClient<townshipsGetPayload<T>>

    /**
     * Find the first Townships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {townshipsFindFirstArgs} args - Arguments to find a Townships
     * @example
     * // Get one Townships
     * const townships = await prisma.townships.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends townshipsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, townshipsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'townships'> extends True ? Prisma__townshipsClient<townshipsGetPayload<T>> : Prisma__townshipsClient<townshipsGetPayload<T> | null, null>

    /**
     * Find the first Townships that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {townshipsFindFirstOrThrowArgs} args - Arguments to find a Townships
     * @example
     * // Get one Townships
     * const townships = await prisma.townships.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends townshipsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, townshipsFindFirstOrThrowArgs>
    ): Prisma__townshipsClient<townshipsGetPayload<T>>

    /**
     * Find zero or more Townships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {townshipsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Townships
     * const townships = await prisma.townships.findMany()
     * 
     * // Get first 10 Townships
     * const townships = await prisma.townships.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const townshipsWithIdOnly = await prisma.townships.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends townshipsFindManyArgs>(
      args?: SelectSubset<T, townshipsFindManyArgs>
    ): Prisma.PrismaPromise<Array<townshipsGetPayload<T>>>

    /**
     * Create a Townships.
     * @param {townshipsCreateArgs} args - Arguments to create a Townships.
     * @example
     * // Create one Townships
     * const Townships = await prisma.townships.create({
     *   data: {
     *     // ... data to create a Townships
     *   }
     * })
     * 
    **/
    create<T extends townshipsCreateArgs>(
      args: SelectSubset<T, townshipsCreateArgs>
    ): Prisma__townshipsClient<townshipsGetPayload<T>>

    /**
     * Create many Townships.
     *     @param {townshipsCreateManyArgs} args - Arguments to create many Townships.
     *     @example
     *     // Create many Townships
     *     const townships = await prisma.townships.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends townshipsCreateManyArgs>(
      args?: SelectSubset<T, townshipsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Townships.
     * @param {townshipsDeleteArgs} args - Arguments to delete one Townships.
     * @example
     * // Delete one Townships
     * const Townships = await prisma.townships.delete({
     *   where: {
     *     // ... filter to delete one Townships
     *   }
     * })
     * 
    **/
    delete<T extends townshipsDeleteArgs>(
      args: SelectSubset<T, townshipsDeleteArgs>
    ): Prisma__townshipsClient<townshipsGetPayload<T>>

    /**
     * Update one Townships.
     * @param {townshipsUpdateArgs} args - Arguments to update one Townships.
     * @example
     * // Update one Townships
     * const townships = await prisma.townships.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends townshipsUpdateArgs>(
      args: SelectSubset<T, townshipsUpdateArgs>
    ): Prisma__townshipsClient<townshipsGetPayload<T>>

    /**
     * Delete zero or more Townships.
     * @param {townshipsDeleteManyArgs} args - Arguments to filter Townships to delete.
     * @example
     * // Delete a few Townships
     * const { count } = await prisma.townships.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends townshipsDeleteManyArgs>(
      args?: SelectSubset<T, townshipsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Townships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {townshipsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Townships
     * const townships = await prisma.townships.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends townshipsUpdateManyArgs>(
      args: SelectSubset<T, townshipsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Townships.
     * @param {townshipsUpsertArgs} args - Arguments to update or create a Townships.
     * @example
     * // Update or create a Townships
     * const townships = await prisma.townships.upsert({
     *   create: {
     *     // ... data to create a Townships
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Townships we want to update
     *   }
     * })
    **/
    upsert<T extends townshipsUpsertArgs>(
      args: SelectSubset<T, townshipsUpsertArgs>
    ): Prisma__townshipsClient<townshipsGetPayload<T>>

    /**
     * Count the number of Townships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {townshipsCountArgs} args - Arguments to filter Townships to count.
     * @example
     * // Count the number of Townships
     * const count = await prisma.townships.count({
     *   where: {
     *     // ... the filter for the Townships we want to count
     *   }
     * })
    **/
    count<T extends townshipsCountArgs>(
      args?: Subset<T, townshipsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TownshipsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Townships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownshipsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TownshipsAggregateArgs>(args: Subset<T, TownshipsAggregateArgs>): Prisma.PrismaPromise<GetTownshipsAggregateType<T>>

    /**
     * Group by Townships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownshipsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TownshipsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TownshipsGroupByArgs['orderBy'] }
        : { orderBy?: TownshipsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TownshipsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTownshipsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for townships.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__townshipsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    branches<T extends townships$branchesArgs= {}>(args?: Subset<T, townships$branchesArgs>): Prisma.PrismaPromise<Array<branchesGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * townships base type for findUnique actions
   */
  export type townshipsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the townships
     */
    select?: townshipsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: townshipsInclude | null
    /**
     * Filter, which townships to fetch.
     */
    where: townshipsWhereUniqueInput
  }

  /**
   * townships findUnique
   */
  export interface townshipsFindUniqueArgs extends townshipsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * townships findUniqueOrThrow
   */
  export type townshipsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the townships
     */
    select?: townshipsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: townshipsInclude | null
    /**
     * Filter, which townships to fetch.
     */
    where: townshipsWhereUniqueInput
  }


  /**
   * townships base type for findFirst actions
   */
  export type townshipsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the townships
     */
    select?: townshipsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: townshipsInclude | null
    /**
     * Filter, which townships to fetch.
     */
    where?: townshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of townships to fetch.
     */
    orderBy?: Enumerable<townshipsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for townships.
     */
    cursor?: townshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` townships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` townships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of townships.
     */
    distinct?: Enumerable<TownshipsScalarFieldEnum>
  }

  /**
   * townships findFirst
   */
  export interface townshipsFindFirstArgs extends townshipsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * townships findFirstOrThrow
   */
  export type townshipsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the townships
     */
    select?: townshipsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: townshipsInclude | null
    /**
     * Filter, which townships to fetch.
     */
    where?: townshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of townships to fetch.
     */
    orderBy?: Enumerable<townshipsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for townships.
     */
    cursor?: townshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` townships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` townships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of townships.
     */
    distinct?: Enumerable<TownshipsScalarFieldEnum>
  }


  /**
   * townships findMany
   */
  export type townshipsFindManyArgs = {
    /**
     * Select specific fields to fetch from the townships
     */
    select?: townshipsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: townshipsInclude | null
    /**
     * Filter, which townships to fetch.
     */
    where?: townshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of townships to fetch.
     */
    orderBy?: Enumerable<townshipsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing townships.
     */
    cursor?: townshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` townships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` townships.
     */
    skip?: number
    distinct?: Enumerable<TownshipsScalarFieldEnum>
  }


  /**
   * townships create
   */
  export type townshipsCreateArgs = {
    /**
     * Select specific fields to fetch from the townships
     */
    select?: townshipsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: townshipsInclude | null
    /**
     * The data needed to create a townships.
     */
    data: XOR<townshipsCreateInput, townshipsUncheckedCreateInput>
  }


  /**
   * townships createMany
   */
  export type townshipsCreateManyArgs = {
    /**
     * The data used to create many townships.
     */
    data: Enumerable<townshipsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * townships update
   */
  export type townshipsUpdateArgs = {
    /**
     * Select specific fields to fetch from the townships
     */
    select?: townshipsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: townshipsInclude | null
    /**
     * The data needed to update a townships.
     */
    data: XOR<townshipsUpdateInput, townshipsUncheckedUpdateInput>
    /**
     * Choose, which townships to update.
     */
    where: townshipsWhereUniqueInput
  }


  /**
   * townships updateMany
   */
  export type townshipsUpdateManyArgs = {
    /**
     * The data used to update townships.
     */
    data: XOR<townshipsUpdateManyMutationInput, townshipsUncheckedUpdateManyInput>
    /**
     * Filter which townships to update
     */
    where?: townshipsWhereInput
  }


  /**
   * townships upsert
   */
  export type townshipsUpsertArgs = {
    /**
     * Select specific fields to fetch from the townships
     */
    select?: townshipsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: townshipsInclude | null
    /**
     * The filter to search for the townships to update in case it exists.
     */
    where: townshipsWhereUniqueInput
    /**
     * In case the townships found by the `where` argument doesn't exist, create a new townships with this data.
     */
    create: XOR<townshipsCreateInput, townshipsUncheckedCreateInput>
    /**
     * In case the townships was found with the provided `where` argument, update it with this data.
     */
    update: XOR<townshipsUpdateInput, townshipsUncheckedUpdateInput>
  }


  /**
   * townships delete
   */
  export type townshipsDeleteArgs = {
    /**
     * Select specific fields to fetch from the townships
     */
    select?: townshipsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: townshipsInclude | null
    /**
     * Filter which townships to delete.
     */
    where: townshipsWhereUniqueInput
  }


  /**
   * townships deleteMany
   */
  export type townshipsDeleteManyArgs = {
    /**
     * Filter which townships to delete
     */
    where?: townshipsWhereInput
  }


  /**
   * townships.branches
   */
  export type townships$branchesArgs = {
    /**
     * Select specific fields to fetch from the branches
     */
    select?: branchesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: branchesInclude | null
    where?: branchesWhereInput
    orderBy?: Enumerable<branchesOrderByWithRelationInput>
    cursor?: branchesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BranchesScalarFieldEnum>
  }


  /**
   * townships without action
   */
  export type townshipsArgs = {
    /**
     * Select specific fields to fetch from the townships
     */
    select?: townshipsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: townshipsInclude | null
  }



  /**
   * Model users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    company_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    company_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    company_id: number | null
    role: Role | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    company_id: number | null
    role: Role | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    company_id: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    company_id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    company_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    company_id?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    company_id?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    company_id?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithAggregationInput>
    by: UsersScalarFieldEnum[]
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    company_id: number
    role: Role
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    company_id?: boolean
    role?: boolean
    companies?: boolean | companiesArgs
  }


  export type usersInclude = {
    companies?: boolean | companiesArgs
  }

  export type usersGetPayload<S extends boolean | null | undefined | usersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? users :
    S extends undefined ? never :
    S extends { include: any } & (usersArgs | usersFindManyArgs)
    ? users  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'companies' ? companiesGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (usersArgs | usersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'companies' ? companiesGetPayload<S['select'][P]> :  P extends keyof users ? users[P] : never
  } 
      : users


  type usersCountArgs = 
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'users'> extends True ? Prisma__usersClient<usersGetPayload<T>> : Prisma__usersClient<usersGetPayload<T> | null, null>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'users'> extends True ? Prisma__usersClient<usersGetPayload<T>> : Prisma__usersClient<usersGetPayload<T> | null, null>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs>
    ): Prisma.PrismaPromise<Array<usersGetPayload<T>>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    companies<T extends companiesArgs= {}>(args?: Subset<T, companiesArgs>): Prisma__companiesClient<companiesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * users base type for findUnique actions
   */
  export type usersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUnique
   */
  export interface usersFindUniqueArgs extends usersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users base type for findFirst actions
   */
  export type usersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * users findFirst
   */
  export interface usersFindFirstArgs extends usersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users create
   */
  export type usersCreateArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs = {
    /**
     * The data used to create many users.
     */
    data: Enumerable<usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users without action
   */
  export type usersArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
  }



  /**
   * Enums
   */

  export const Addon_categoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_required: 'is_required'
  };

  export type Addon_categoriesScalarFieldEnum = (typeof Addon_categoriesScalarFieldEnum)[keyof typeof Addon_categoriesScalarFieldEnum]


  export const AddonsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    addon_categories_id: 'addon_categories_id'
  };

  export type AddonsScalarFieldEnum = (typeof AddonsScalarFieldEnum)[keyof typeof AddonsScalarFieldEnum]


  export const BranchesScalarFieldEnum: {
    id: 'id',
    township_id: 'township_id',
    company_id: 'company_id',
    address: 'address'
  };

  export type BranchesScalarFieldEnum = (typeof BranchesScalarFieldEnum)[keyof typeof BranchesScalarFieldEnum]


  export const Branches_addonsScalarFieldEnum: {
    id: 'id',
    addon_id: 'addon_id',
    branch_id: 'branch_id',
    is_available: 'is_available'
  };

  export type Branches_addonsScalarFieldEnum = (typeof Branches_addonsScalarFieldEnum)[keyof typeof Branches_addonsScalarFieldEnum]


  export const Branches_menucategories_menusScalarFieldEnum: {
    id: 'id',
    menu_id: 'menu_id',
    branch_id: 'branch_id',
    menucategory_id: 'menucategory_id',
    is_available: 'is_available'
  };

  export type Branches_menucategories_menusScalarFieldEnum = (typeof Branches_menucategories_menusScalarFieldEnum)[keyof typeof Branches_menucategories_menusScalarFieldEnum]


  export const CompaniesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CompaniesScalarFieldEnum = (typeof CompaniesScalarFieldEnum)[keyof typeof CompaniesScalarFieldEnum]


  export const Menu_addonsScalarFieldEnum: {
    id: 'id',
    menu_id: 'menu_id',
    addon_id: 'addon_id',
    price: 'price'
  };

  export type Menu_addonsScalarFieldEnum = (typeof Menu_addonsScalarFieldEnum)[keyof typeof Menu_addonsScalarFieldEnum]


  export const Menu_categoriesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Menu_categoriesScalarFieldEnum = (typeof Menu_categoriesScalarFieldEnum)[keyof typeof Menu_categoriesScalarFieldEnum]


  export const MenusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    asset_url: 'asset_url',
    description: 'description'
  };

  export type MenusScalarFieldEnum = (typeof MenusScalarFieldEnum)[keyof typeof MenusScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TownshipsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TownshipsScalarFieldEnum = (typeof TownshipsScalarFieldEnum)[keyof typeof TownshipsScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    company_id: 'company_id',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type addon_categoriesWhereInput = {
    AND?: Enumerable<addon_categoriesWhereInput>
    OR?: Enumerable<addon_categoriesWhereInput>
    NOT?: Enumerable<addon_categoriesWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    is_required?: BoolFilter | boolean
    menu_addons?: Menu_addonsListRelationFilter
  }

  export type addon_categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    is_required?: SortOrder
    menu_addons?: menu_addonsOrderByRelationAggregateInput
  }

  export type addon_categoriesWhereUniqueInput = {
    id?: number
  }

  export type addon_categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    is_required?: SortOrder
    _count?: addon_categoriesCountOrderByAggregateInput
    _avg?: addon_categoriesAvgOrderByAggregateInput
    _max?: addon_categoriesMaxOrderByAggregateInput
    _min?: addon_categoriesMinOrderByAggregateInput
    _sum?: addon_categoriesSumOrderByAggregateInput
  }

  export type addon_categoriesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<addon_categoriesScalarWhereWithAggregatesInput>
    OR?: Enumerable<addon_categoriesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<addon_categoriesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    is_required?: BoolWithAggregatesFilter | boolean
  }

  export type addonsWhereInput = {
    AND?: Enumerable<addonsWhereInput>
    OR?: Enumerable<addonsWhereInput>
    NOT?: Enumerable<addonsWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    addon_categories_id?: IntNullableFilter | number | null
    branches_addons?: Branches_addonsListRelationFilter
    menu_addons?: Menu_addonsListRelationFilter
  }

  export type addonsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    addon_categories_id?: SortOrder
    branches_addons?: branches_addonsOrderByRelationAggregateInput
    menu_addons?: menu_addonsOrderByRelationAggregateInput
  }

  export type addonsWhereUniqueInput = {
    id?: number
  }

  export type addonsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    addon_categories_id?: SortOrder
    _count?: addonsCountOrderByAggregateInput
    _avg?: addonsAvgOrderByAggregateInput
    _max?: addonsMaxOrderByAggregateInput
    _min?: addonsMinOrderByAggregateInput
    _sum?: addonsSumOrderByAggregateInput
  }

  export type addonsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<addonsScalarWhereWithAggregatesInput>
    OR?: Enumerable<addonsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<addonsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    addon_categories_id?: IntNullableWithAggregatesFilter | number | null
  }

  export type branchesWhereInput = {
    AND?: Enumerable<branchesWhereInput>
    OR?: Enumerable<branchesWhereInput>
    NOT?: Enumerable<branchesWhereInput>
    id?: IntFilter | number
    township_id?: IntFilter | number
    company_id?: IntFilter | number
    address?: StringFilter | string
    companies?: XOR<CompaniesRelationFilter, companiesWhereInput>
    townships?: XOR<TownshipsRelationFilter, townshipsWhereInput>
    branches_addons?: Branches_addonsListRelationFilter
    branches_menucategories_menus?: Branches_menucategories_menusListRelationFilter
  }

  export type branchesOrderByWithRelationInput = {
    id?: SortOrder
    township_id?: SortOrder
    company_id?: SortOrder
    address?: SortOrder
    companies?: companiesOrderByWithRelationInput
    townships?: townshipsOrderByWithRelationInput
    branches_addons?: branches_addonsOrderByRelationAggregateInput
    branches_menucategories_menus?: branches_menucategories_menusOrderByRelationAggregateInput
  }

  export type branchesWhereUniqueInput = {
    id?: number
  }

  export type branchesOrderByWithAggregationInput = {
    id?: SortOrder
    township_id?: SortOrder
    company_id?: SortOrder
    address?: SortOrder
    _count?: branchesCountOrderByAggregateInput
    _avg?: branchesAvgOrderByAggregateInput
    _max?: branchesMaxOrderByAggregateInput
    _min?: branchesMinOrderByAggregateInput
    _sum?: branchesSumOrderByAggregateInput
  }

  export type branchesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<branchesScalarWhereWithAggregatesInput>
    OR?: Enumerable<branchesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<branchesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    township_id?: IntWithAggregatesFilter | number
    company_id?: IntWithAggregatesFilter | number
    address?: StringWithAggregatesFilter | string
  }

  export type branches_addonsWhereInput = {
    AND?: Enumerable<branches_addonsWhereInput>
    OR?: Enumerable<branches_addonsWhereInput>
    NOT?: Enumerable<branches_addonsWhereInput>
    id?: IntFilter | number
    addon_id?: IntFilter | number
    branch_id?: IntFilter | number
    is_available?: BoolNullableFilter | boolean | null
    addons?: XOR<AddonsRelationFilter, addonsWhereInput>
    branches?: XOR<BranchesRelationFilter, branchesWhereInput>
  }

  export type branches_addonsOrderByWithRelationInput = {
    id?: SortOrder
    addon_id?: SortOrder
    branch_id?: SortOrder
    is_available?: SortOrder
    addons?: addonsOrderByWithRelationInput
    branches?: branchesOrderByWithRelationInput
  }

  export type branches_addonsWhereUniqueInput = {
    id?: number
  }

  export type branches_addonsOrderByWithAggregationInput = {
    id?: SortOrder
    addon_id?: SortOrder
    branch_id?: SortOrder
    is_available?: SortOrder
    _count?: branches_addonsCountOrderByAggregateInput
    _avg?: branches_addonsAvgOrderByAggregateInput
    _max?: branches_addonsMaxOrderByAggregateInput
    _min?: branches_addonsMinOrderByAggregateInput
    _sum?: branches_addonsSumOrderByAggregateInput
  }

  export type branches_addonsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<branches_addonsScalarWhereWithAggregatesInput>
    OR?: Enumerable<branches_addonsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<branches_addonsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    addon_id?: IntWithAggregatesFilter | number
    branch_id?: IntWithAggregatesFilter | number
    is_available?: BoolNullableWithAggregatesFilter | boolean | null
  }

  export type branches_menucategories_menusWhereInput = {
    AND?: Enumerable<branches_menucategories_menusWhereInput>
    OR?: Enumerable<branches_menucategories_menusWhereInput>
    NOT?: Enumerable<branches_menucategories_menusWhereInput>
    id?: IntFilter | number
    menu_id?: IntNullableFilter | number | null
    branch_id?: IntFilter | number
    menucategory_id?: IntFilter | number
    is_available?: BoolFilter | boolean
    menus?: XOR<MenusRelationFilter, menusWhereInput> | null
    menu_categories?: XOR<Menu_categoriesRelationFilter, menu_categoriesWhereInput>
    branches?: XOR<BranchesRelationFilter, branchesWhereInput>
  }

  export type branches_menucategories_menusOrderByWithRelationInput = {
    id?: SortOrder
    menu_id?: SortOrder
    branch_id?: SortOrder
    menucategory_id?: SortOrder
    is_available?: SortOrder
    menus?: menusOrderByWithRelationInput
    menu_categories?: menu_categoriesOrderByWithRelationInput
    branches?: branchesOrderByWithRelationInput
  }

  export type branches_menucategories_menusWhereUniqueInput = {
    id?: number
  }

  export type branches_menucategories_menusOrderByWithAggregationInput = {
    id?: SortOrder
    menu_id?: SortOrder
    branch_id?: SortOrder
    menucategory_id?: SortOrder
    is_available?: SortOrder
    _count?: branches_menucategories_menusCountOrderByAggregateInput
    _avg?: branches_menucategories_menusAvgOrderByAggregateInput
    _max?: branches_menucategories_menusMaxOrderByAggregateInput
    _min?: branches_menucategories_menusMinOrderByAggregateInput
    _sum?: branches_menucategories_menusSumOrderByAggregateInput
  }

  export type branches_menucategories_menusScalarWhereWithAggregatesInput = {
    AND?: Enumerable<branches_menucategories_menusScalarWhereWithAggregatesInput>
    OR?: Enumerable<branches_menucategories_menusScalarWhereWithAggregatesInput>
    NOT?: Enumerable<branches_menucategories_menusScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    menu_id?: IntNullableWithAggregatesFilter | number | null
    branch_id?: IntWithAggregatesFilter | number
    menucategory_id?: IntWithAggregatesFilter | number
    is_available?: BoolWithAggregatesFilter | boolean
  }

  export type companiesWhereInput = {
    AND?: Enumerable<companiesWhereInput>
    OR?: Enumerable<companiesWhereInput>
    NOT?: Enumerable<companiesWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    branches?: BranchesListRelationFilter
    users?: UsersListRelationFilter
  }

  export type companiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    branches?: branchesOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
  }

  export type companiesWhereUniqueInput = {
    id?: number
  }

  export type companiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: companiesCountOrderByAggregateInput
    _avg?: companiesAvgOrderByAggregateInput
    _max?: companiesMaxOrderByAggregateInput
    _min?: companiesMinOrderByAggregateInput
    _sum?: companiesSumOrderByAggregateInput
  }

  export type companiesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<companiesScalarWhereWithAggregatesInput>
    OR?: Enumerable<companiesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<companiesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type menu_categoriesWhereInput = {
    AND?: Enumerable<menu_categoriesWhereInput>
    OR?: Enumerable<menu_categoriesWhereInput>
    NOT?: Enumerable<menu_categoriesWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    branches_menucategories_menus?: Branches_menucategories_menusListRelationFilter
  }

  export type menu_categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    branches_menucategories_menus?: branches_menucategories_menusOrderByRelationAggregateInput
  }

  export type menu_categoriesWhereUniqueInput = {
    id?: number
  }

  export type menu_categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: menu_categoriesCountOrderByAggregateInput
    _avg?: menu_categoriesAvgOrderByAggregateInput
    _max?: menu_categoriesMaxOrderByAggregateInput
    _min?: menu_categoriesMinOrderByAggregateInput
    _sum?: menu_categoriesSumOrderByAggregateInput
  }

  export type menu_categoriesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<menu_categoriesScalarWhereWithAggregatesInput>
    OR?: Enumerable<menu_categoriesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<menu_categoriesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type menusWhereInput = {
    AND?: Enumerable<menusWhereInput>
    OR?: Enumerable<menusWhereInput>
    NOT?: Enumerable<menusWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    price?: IntFilter | number
    asset_url?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    branches_menucategories_menus?: Branches_menucategories_menusListRelationFilter
    menus_addoncats_addons?: Menu_addonsListRelationFilter
  }

  export type menusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    asset_url?: SortOrder
    description?: SortOrder
    branches_menucategories_menus?: branches_menucategories_menusOrderByRelationAggregateInput
    menus_addoncats_addons?: menu_addonsOrderByRelationAggregateInput
  }

  export type menusWhereUniqueInput = {
    id?: number
  }

  export type menusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    asset_url?: SortOrder
    description?: SortOrder
    _count?: menusCountOrderByAggregateInput
    _avg?: menusAvgOrderByAggregateInput
    _max?: menusMaxOrderByAggregateInput
    _min?: menusMinOrderByAggregateInput
    _sum?: menusSumOrderByAggregateInput
  }

  export type menusScalarWhereWithAggregatesInput = {
    AND?: Enumerable<menusScalarWhereWithAggregatesInput>
    OR?: Enumerable<menusScalarWhereWithAggregatesInput>
    NOT?: Enumerable<menusScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    price?: IntWithAggregatesFilter | number
    asset_url?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
  }

  export type menu_addonsWhereInput = {
    AND?: Enumerable<menu_addonsWhereInput>
    OR?: Enumerable<menu_addonsWhereInput>
    NOT?: Enumerable<menu_addonsWhereInput>
    id?: IntFilter | number
    menu_id?: IntFilter | number
    addon_id?: IntFilter | number
    price?: IntFilter | number
    menu?: XOR<MenusRelationFilter, menusWhereInput>
    addon?: XOR<AddonsRelationFilter, addonsWhereInput>
    addon_categories?: Addon_categoriesListRelationFilter
  }

  export type menu_addonsOrderByWithRelationInput = {
    id?: SortOrder
    menu_id?: SortOrder
    addon_id?: SortOrder
    price?: SortOrder
    menu?: menusOrderByWithRelationInput
    addon?: addonsOrderByWithRelationInput
    addon_categories?: addon_categoriesOrderByRelationAggregateInput
  }

  export type menu_addonsWhereUniqueInput = {
    id?: number
  }

  export type menu_addonsOrderByWithAggregationInput = {
    id?: SortOrder
    menu_id?: SortOrder
    addon_id?: SortOrder
    price?: SortOrder
    _count?: menu_addonsCountOrderByAggregateInput
    _avg?: menu_addonsAvgOrderByAggregateInput
    _max?: menu_addonsMaxOrderByAggregateInput
    _min?: menu_addonsMinOrderByAggregateInput
    _sum?: menu_addonsSumOrderByAggregateInput
  }

  export type menu_addonsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<menu_addonsScalarWhereWithAggregatesInput>
    OR?: Enumerable<menu_addonsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<menu_addonsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    menu_id?: IntWithAggregatesFilter | number
    addon_id?: IntWithAggregatesFilter | number
    price?: IntWithAggregatesFilter | number
  }

  export type townshipsWhereInput = {
    AND?: Enumerable<townshipsWhereInput>
    OR?: Enumerable<townshipsWhereInput>
    NOT?: Enumerable<townshipsWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    branches?: BranchesListRelationFilter
  }

  export type townshipsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    branches?: branchesOrderByRelationAggregateInput
  }

  export type townshipsWhereUniqueInput = {
    id?: number
  }

  export type townshipsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: townshipsCountOrderByAggregateInput
    _avg?: townshipsAvgOrderByAggregateInput
    _max?: townshipsMaxOrderByAggregateInput
    _min?: townshipsMinOrderByAggregateInput
    _sum?: townshipsSumOrderByAggregateInput
  }

  export type townshipsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<townshipsScalarWhereWithAggregatesInput>
    OR?: Enumerable<townshipsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<townshipsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type usersWhereInput = {
    AND?: Enumerable<usersWhereInput>
    OR?: Enumerable<usersWhereInput>
    NOT?: Enumerable<usersWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    company_id?: IntFilter | number
    role?: EnumRoleFilter | Role
    companies?: XOR<CompaniesRelationFilter, companiesWhereInput>
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    company_id?: SortOrder
    role?: SortOrder
    companies?: companiesOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = {
    id?: number
  }

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    company_id?: SortOrder
    role?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    company_id?: IntWithAggregatesFilter | number
    role?: EnumRoleWithAggregatesFilter | Role
  }

  export type addon_categoriesCreateInput = {
    name: string
    is_required?: boolean
    menu_addons?: menu_addonsCreateNestedManyWithoutAddon_categoriesInput
  }

  export type addon_categoriesUncheckedCreateInput = {
    id?: number
    name: string
    is_required?: boolean
    menu_addons?: menu_addonsUncheckedCreateNestedManyWithoutAddon_categoriesInput
  }

  export type addon_categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_required?: BoolFieldUpdateOperationsInput | boolean
    menu_addons?: menu_addonsUpdateManyWithoutAddon_categoriesNestedInput
  }

  export type addon_categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_required?: BoolFieldUpdateOperationsInput | boolean
    menu_addons?: menu_addonsUncheckedUpdateManyWithoutAddon_categoriesNestedInput
  }

  export type addon_categoriesCreateManyInput = {
    id?: number
    name: string
    is_required?: boolean
  }

  export type addon_categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type addon_categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type addonsCreateInput = {
    name: string
    addon_categories_id?: number | null
    branches_addons?: branches_addonsCreateNestedManyWithoutAddonsInput
    menu_addons?: menu_addonsCreateNestedManyWithoutAddonInput
  }

  export type addonsUncheckedCreateInput = {
    id?: number
    name: string
    addon_categories_id?: number | null
    branches_addons?: branches_addonsUncheckedCreateNestedManyWithoutAddonsInput
    menu_addons?: menu_addonsUncheckedCreateNestedManyWithoutAddonInput
  }

  export type addonsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    addon_categories_id?: NullableIntFieldUpdateOperationsInput | number | null
    branches_addons?: branches_addonsUpdateManyWithoutAddonsNestedInput
    menu_addons?: menu_addonsUpdateManyWithoutAddonNestedInput
  }

  export type addonsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addon_categories_id?: NullableIntFieldUpdateOperationsInput | number | null
    branches_addons?: branches_addonsUncheckedUpdateManyWithoutAddonsNestedInput
    menu_addons?: menu_addonsUncheckedUpdateManyWithoutAddonNestedInput
  }

  export type addonsCreateManyInput = {
    id?: number
    name: string
    addon_categories_id?: number | null
  }

  export type addonsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    addon_categories_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type addonsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addon_categories_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type branchesCreateInput = {
    address: string
    companies: companiesCreateNestedOneWithoutBranchesInput
    townships: townshipsCreateNestedOneWithoutBranchesInput
    branches_addons?: branches_addonsCreateNestedManyWithoutBranchesInput
    branches_menucategories_menus?: branches_menucategories_menusCreateNestedManyWithoutBranchesInput
  }

  export type branchesUncheckedCreateInput = {
    id?: number
    township_id: number
    company_id: number
    address: string
    branches_addons?: branches_addonsUncheckedCreateNestedManyWithoutBranchesInput
    branches_menucategories_menus?: branches_menucategories_menusUncheckedCreateNestedManyWithoutBranchesInput
  }

  export type branchesUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    companies?: companiesUpdateOneRequiredWithoutBranchesNestedInput
    townships?: townshipsUpdateOneRequiredWithoutBranchesNestedInput
    branches_addons?: branches_addonsUpdateManyWithoutBranchesNestedInput
    branches_menucategories_menus?: branches_menucategories_menusUpdateManyWithoutBranchesNestedInput
  }

  export type branchesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    township_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    branches_addons?: branches_addonsUncheckedUpdateManyWithoutBranchesNestedInput
    branches_menucategories_menus?: branches_menucategories_menusUncheckedUpdateManyWithoutBranchesNestedInput
  }

  export type branchesCreateManyInput = {
    id?: number
    township_id: number
    company_id: number
    address: string
  }

  export type branchesUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
  }

  export type branchesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    township_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
  }

  export type branches_addonsCreateInput = {
    is_available?: boolean | null
    addons: addonsCreateNestedOneWithoutBranches_addonsInput
    branches: branchesCreateNestedOneWithoutBranches_addonsInput
  }

  export type branches_addonsUncheckedCreateInput = {
    id?: number
    addon_id: number
    branch_id: number
    is_available?: boolean | null
  }

  export type branches_addonsUpdateInput = {
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addons?: addonsUpdateOneRequiredWithoutBranches_addonsNestedInput
    branches?: branchesUpdateOneRequiredWithoutBranches_addonsNestedInput
  }

  export type branches_addonsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    addon_id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type branches_addonsCreateManyInput = {
    id?: number
    addon_id: number
    branch_id: number
    is_available?: boolean | null
  }

  export type branches_addonsUpdateManyMutationInput = {
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type branches_addonsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    addon_id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type branches_menucategories_menusCreateInput = {
    is_available?: boolean
    menus?: menusCreateNestedOneWithoutBranches_menucategories_menusInput
    menu_categories: menu_categoriesCreateNestedOneWithoutBranches_menucategories_menusInput
    branches: branchesCreateNestedOneWithoutBranches_menucategories_menusInput
  }

  export type branches_menucategories_menusUncheckedCreateInput = {
    id?: number
    menu_id?: number | null
    branch_id: number
    menucategory_id: number
    is_available?: boolean
  }

  export type branches_menucategories_menusUpdateInput = {
    is_available?: BoolFieldUpdateOperationsInput | boolean
    menus?: menusUpdateOneWithoutBranches_menucategories_menusNestedInput
    menu_categories?: menu_categoriesUpdateOneRequiredWithoutBranches_menucategories_menusNestedInput
    branches?: branchesUpdateOneRequiredWithoutBranches_menucategories_menusNestedInput
  }

  export type branches_menucategories_menusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_id?: NullableIntFieldUpdateOperationsInput | number | null
    branch_id?: IntFieldUpdateOperationsInput | number
    menucategory_id?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type branches_menucategories_menusCreateManyInput = {
    id?: number
    menu_id?: number | null
    branch_id: number
    menucategory_id: number
    is_available?: boolean
  }

  export type branches_menucategories_menusUpdateManyMutationInput = {
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type branches_menucategories_menusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_id?: NullableIntFieldUpdateOperationsInput | number | null
    branch_id?: IntFieldUpdateOperationsInput | number
    menucategory_id?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type companiesCreateInput = {
    name: string
    branches?: branchesCreateNestedManyWithoutCompaniesInput
    users?: usersCreateNestedManyWithoutCompaniesInput
  }

  export type companiesUncheckedCreateInput = {
    id?: number
    name: string
    branches?: branchesUncheckedCreateNestedManyWithoutCompaniesInput
    users?: usersUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type companiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    branches?: branchesUpdateManyWithoutCompaniesNestedInput
    users?: usersUpdateManyWithoutCompaniesNestedInput
  }

  export type companiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branches?: branchesUncheckedUpdateManyWithoutCompaniesNestedInput
    users?: usersUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type companiesCreateManyInput = {
    id?: number
    name: string
  }

  export type companiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type companiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type menu_categoriesCreateInput = {
    name: string
    branches_menucategories_menus?: branches_menucategories_menusCreateNestedManyWithoutMenu_categoriesInput
  }

  export type menu_categoriesUncheckedCreateInput = {
    id?: number
    name: string
    branches_menucategories_menus?: branches_menucategories_menusUncheckedCreateNestedManyWithoutMenu_categoriesInput
  }

  export type menu_categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    branches_menucategories_menus?: branches_menucategories_menusUpdateManyWithoutMenu_categoriesNestedInput
  }

  export type menu_categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branches_menucategories_menus?: branches_menucategories_menusUncheckedUpdateManyWithoutMenu_categoriesNestedInput
  }

  export type menu_categoriesCreateManyInput = {
    id?: number
    name: string
  }

  export type menu_categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type menu_categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type menusCreateInput = {
    name: string
    price: number
    asset_url?: string | null
    description?: string | null
    branches_menucategories_menus?: branches_menucategories_menusCreateNestedManyWithoutMenusInput
    menus_addoncats_addons?: menu_addonsCreateNestedManyWithoutMenuInput
  }

  export type menusUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    asset_url?: string | null
    description?: string | null
    branches_menucategories_menus?: branches_menucategories_menusUncheckedCreateNestedManyWithoutMenusInput
    menus_addoncats_addons?: menu_addonsUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    asset_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    branches_menucategories_menus?: branches_menucategories_menusUpdateManyWithoutMenusNestedInput
    menus_addoncats_addons?: menu_addonsUpdateManyWithoutMenuNestedInput
  }

  export type menusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    asset_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    branches_menucategories_menus?: branches_menucategories_menusUncheckedUpdateManyWithoutMenusNestedInput
    menus_addoncats_addons?: menu_addonsUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type menusCreateManyInput = {
    id?: number
    name: string
    price: number
    asset_url?: string | null
    description?: string | null
  }

  export type menusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    asset_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type menusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    asset_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type menu_addonsCreateInput = {
    price: number
    menu: menusCreateNestedOneWithoutMenus_addoncats_addonsInput
    addon: addonsCreateNestedOneWithoutMenu_addonsInput
    addon_categories?: addon_categoriesCreateNestedManyWithoutMenu_addonsInput
  }

  export type menu_addonsUncheckedCreateInput = {
    id?: number
    menu_id: number
    addon_id: number
    price: number
    addon_categories?: addon_categoriesUncheckedCreateNestedManyWithoutMenu_addonsInput
  }

  export type menu_addonsUpdateInput = {
    price?: IntFieldUpdateOperationsInput | number
    menu?: menusUpdateOneRequiredWithoutMenus_addoncats_addonsNestedInput
    addon?: addonsUpdateOneRequiredWithoutMenu_addonsNestedInput
    addon_categories?: addon_categoriesUpdateManyWithoutMenu_addonsNestedInput
  }

  export type menu_addonsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_id?: IntFieldUpdateOperationsInput | number
    addon_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    addon_categories?: addon_categoriesUncheckedUpdateManyWithoutMenu_addonsNestedInput
  }

  export type menu_addonsCreateManyInput = {
    id?: number
    menu_id: number
    addon_id: number
    price: number
  }

  export type menu_addonsUpdateManyMutationInput = {
    price?: IntFieldUpdateOperationsInput | number
  }

  export type menu_addonsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_id?: IntFieldUpdateOperationsInput | number
    addon_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type townshipsCreateInput = {
    name: string
    branches?: branchesCreateNestedManyWithoutTownshipsInput
  }

  export type townshipsUncheckedCreateInput = {
    id?: number
    name: string
    branches?: branchesUncheckedCreateNestedManyWithoutTownshipsInput
  }

  export type townshipsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    branches?: branchesUpdateManyWithoutTownshipsNestedInput
  }

  export type townshipsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branches?: branchesUncheckedUpdateManyWithoutTownshipsNestedInput
  }

  export type townshipsCreateManyInput = {
    id?: number
    name: string
  }

  export type townshipsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type townshipsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateInput = {
    name: string
    email: string
    password: string
    role: Role
    companies: companiesCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    company_id: number
    role: Role
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
    companies?: companiesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    company_id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    company_id: number
    role: Role
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    company_id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type Menu_addonsListRelationFilter = {
    every?: menu_addonsWhereInput
    some?: menu_addonsWhereInput
    none?: menu_addonsWhereInput
  }

  export type menu_addonsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type addon_categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_required?: SortOrder
  }

  export type addon_categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type addon_categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_required?: SortOrder
  }

  export type addon_categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_required?: SortOrder
  }

  export type addon_categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type Branches_addonsListRelationFilter = {
    every?: branches_addonsWhereInput
    some?: branches_addonsWhereInput
    none?: branches_addonsWhereInput
  }

  export type branches_addonsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type addonsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    addon_categories_id?: SortOrder
  }

  export type addonsAvgOrderByAggregateInput = {
    id?: SortOrder
    addon_categories_id?: SortOrder
  }

  export type addonsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    addon_categories_id?: SortOrder
  }

  export type addonsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    addon_categories_id?: SortOrder
  }

  export type addonsSumOrderByAggregateInput = {
    id?: SortOrder
    addon_categories_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type CompaniesRelationFilter = {
    is?: companiesWhereInput
    isNot?: companiesWhereInput
  }

  export type TownshipsRelationFilter = {
    is?: townshipsWhereInput
    isNot?: townshipsWhereInput
  }

  export type Branches_menucategories_menusListRelationFilter = {
    every?: branches_menucategories_menusWhereInput
    some?: branches_menucategories_menusWhereInput
    none?: branches_menucategories_menusWhereInput
  }

  export type branches_menucategories_menusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type branchesCountOrderByAggregateInput = {
    id?: SortOrder
    township_id?: SortOrder
    company_id?: SortOrder
    address?: SortOrder
  }

  export type branchesAvgOrderByAggregateInput = {
    id?: SortOrder
    township_id?: SortOrder
    company_id?: SortOrder
  }

  export type branchesMaxOrderByAggregateInput = {
    id?: SortOrder
    township_id?: SortOrder
    company_id?: SortOrder
    address?: SortOrder
  }

  export type branchesMinOrderByAggregateInput = {
    id?: SortOrder
    township_id?: SortOrder
    company_id?: SortOrder
    address?: SortOrder
  }

  export type branchesSumOrderByAggregateInput = {
    id?: SortOrder
    township_id?: SortOrder
    company_id?: SortOrder
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type AddonsRelationFilter = {
    is?: addonsWhereInput
    isNot?: addonsWhereInput
  }

  export type BranchesRelationFilter = {
    is?: branchesWhereInput
    isNot?: branchesWhereInput
  }

  export type branches_addonsCountOrderByAggregateInput = {
    id?: SortOrder
    addon_id?: SortOrder
    branch_id?: SortOrder
    is_available?: SortOrder
  }

  export type branches_addonsAvgOrderByAggregateInput = {
    id?: SortOrder
    addon_id?: SortOrder
    branch_id?: SortOrder
  }

  export type branches_addonsMaxOrderByAggregateInput = {
    id?: SortOrder
    addon_id?: SortOrder
    branch_id?: SortOrder
    is_available?: SortOrder
  }

  export type branches_addonsMinOrderByAggregateInput = {
    id?: SortOrder
    addon_id?: SortOrder
    branch_id?: SortOrder
    is_available?: SortOrder
  }

  export type branches_addonsSumOrderByAggregateInput = {
    id?: SortOrder
    addon_id?: SortOrder
    branch_id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type MenusRelationFilter = {
    is?: menusWhereInput | null
    isNot?: menusWhereInput | null
  }

  export type Menu_categoriesRelationFilter = {
    is?: menu_categoriesWhereInput
    isNot?: menu_categoriesWhereInput
  }

  export type branches_menucategories_menusCountOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    branch_id?: SortOrder
    menucategory_id?: SortOrder
    is_available?: SortOrder
  }

  export type branches_menucategories_menusAvgOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    branch_id?: SortOrder
    menucategory_id?: SortOrder
  }

  export type branches_menucategories_menusMaxOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    branch_id?: SortOrder
    menucategory_id?: SortOrder
    is_available?: SortOrder
  }

  export type branches_menucategories_menusMinOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    branch_id?: SortOrder
    menucategory_id?: SortOrder
    is_available?: SortOrder
  }

  export type branches_menucategories_menusSumOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    branch_id?: SortOrder
    menucategory_id?: SortOrder
  }

  export type BranchesListRelationFilter = {
    every?: branchesWhereInput
    some?: branchesWhereInput
    none?: branchesWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type branchesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type companiesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type companiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type companiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type companiesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type menu_categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type menu_categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type menu_categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type menu_categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type menu_categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type menusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    asset_url?: SortOrder
    description?: SortOrder
  }

  export type menusAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type menusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    asset_url?: SortOrder
    description?: SortOrder
  }

  export type menusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    asset_url?: SortOrder
    description?: SortOrder
  }

  export type menusSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type Addon_categoriesListRelationFilter = {
    every?: addon_categoriesWhereInput
    some?: addon_categoriesWhereInput
    none?: addon_categoriesWhereInput
  }

  export type addon_categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type menu_addonsCountOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    addon_id?: SortOrder
    price?: SortOrder
  }

  export type menu_addonsAvgOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    addon_id?: SortOrder
    price?: SortOrder
  }

  export type menu_addonsMaxOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    addon_id?: SortOrder
    price?: SortOrder
  }

  export type menu_addonsMinOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    addon_id?: SortOrder
    price?: SortOrder
  }

  export type menu_addonsSumOrderByAggregateInput = {
    id?: SortOrder
    menu_id?: SortOrder
    addon_id?: SortOrder
    price?: SortOrder
  }

  export type townshipsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type townshipsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type townshipsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type townshipsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type townshipsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    company_id?: SortOrder
    role?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    company_id?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    company_id?: SortOrder
    role?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type menu_addonsCreateNestedManyWithoutAddon_categoriesInput = {
    create?: XOR<Enumerable<menu_addonsCreateWithoutAddon_categoriesInput>, Enumerable<menu_addonsUncheckedCreateWithoutAddon_categoriesInput>>
    connectOrCreate?: Enumerable<menu_addonsCreateOrConnectWithoutAddon_categoriesInput>
    connect?: Enumerable<menu_addonsWhereUniqueInput>
  }

  export type menu_addonsUncheckedCreateNestedManyWithoutAddon_categoriesInput = {
    create?: XOR<Enumerable<menu_addonsCreateWithoutAddon_categoriesInput>, Enumerable<menu_addonsUncheckedCreateWithoutAddon_categoriesInput>>
    connectOrCreate?: Enumerable<menu_addonsCreateOrConnectWithoutAddon_categoriesInput>
    connect?: Enumerable<menu_addonsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type menu_addonsUpdateManyWithoutAddon_categoriesNestedInput = {
    create?: XOR<Enumerable<menu_addonsCreateWithoutAddon_categoriesInput>, Enumerable<menu_addonsUncheckedCreateWithoutAddon_categoriesInput>>
    connectOrCreate?: Enumerable<menu_addonsCreateOrConnectWithoutAddon_categoriesInput>
    upsert?: Enumerable<menu_addonsUpsertWithWhereUniqueWithoutAddon_categoriesInput>
    set?: Enumerable<menu_addonsWhereUniqueInput>
    disconnect?: Enumerable<menu_addonsWhereUniqueInput>
    delete?: Enumerable<menu_addonsWhereUniqueInput>
    connect?: Enumerable<menu_addonsWhereUniqueInput>
    update?: Enumerable<menu_addonsUpdateWithWhereUniqueWithoutAddon_categoriesInput>
    updateMany?: Enumerable<menu_addonsUpdateManyWithWhereWithoutAddon_categoriesInput>
    deleteMany?: Enumerable<menu_addonsScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type menu_addonsUncheckedUpdateManyWithoutAddon_categoriesNestedInput = {
    create?: XOR<Enumerable<menu_addonsCreateWithoutAddon_categoriesInput>, Enumerable<menu_addonsUncheckedCreateWithoutAddon_categoriesInput>>
    connectOrCreate?: Enumerable<menu_addonsCreateOrConnectWithoutAddon_categoriesInput>
    upsert?: Enumerable<menu_addonsUpsertWithWhereUniqueWithoutAddon_categoriesInput>
    set?: Enumerable<menu_addonsWhereUniqueInput>
    disconnect?: Enumerable<menu_addonsWhereUniqueInput>
    delete?: Enumerable<menu_addonsWhereUniqueInput>
    connect?: Enumerable<menu_addonsWhereUniqueInput>
    update?: Enumerable<menu_addonsUpdateWithWhereUniqueWithoutAddon_categoriesInput>
    updateMany?: Enumerable<menu_addonsUpdateManyWithWhereWithoutAddon_categoriesInput>
    deleteMany?: Enumerable<menu_addonsScalarWhereInput>
  }

  export type branches_addonsCreateNestedManyWithoutAddonsInput = {
    create?: XOR<Enumerable<branches_addonsCreateWithoutAddonsInput>, Enumerable<branches_addonsUncheckedCreateWithoutAddonsInput>>
    connectOrCreate?: Enumerable<branches_addonsCreateOrConnectWithoutAddonsInput>
    createMany?: branches_addonsCreateManyAddonsInputEnvelope
    connect?: Enumerable<branches_addonsWhereUniqueInput>
  }

  export type menu_addonsCreateNestedManyWithoutAddonInput = {
    create?: XOR<Enumerable<menu_addonsCreateWithoutAddonInput>, Enumerable<menu_addonsUncheckedCreateWithoutAddonInput>>
    connectOrCreate?: Enumerable<menu_addonsCreateOrConnectWithoutAddonInput>
    createMany?: menu_addonsCreateManyAddonInputEnvelope
    connect?: Enumerable<menu_addonsWhereUniqueInput>
  }

  export type branches_addonsUncheckedCreateNestedManyWithoutAddonsInput = {
    create?: XOR<Enumerable<branches_addonsCreateWithoutAddonsInput>, Enumerable<branches_addonsUncheckedCreateWithoutAddonsInput>>
    connectOrCreate?: Enumerable<branches_addonsCreateOrConnectWithoutAddonsInput>
    createMany?: branches_addonsCreateManyAddonsInputEnvelope
    connect?: Enumerable<branches_addonsWhereUniqueInput>
  }

  export type menu_addonsUncheckedCreateNestedManyWithoutAddonInput = {
    create?: XOR<Enumerable<menu_addonsCreateWithoutAddonInput>, Enumerable<menu_addonsUncheckedCreateWithoutAddonInput>>
    connectOrCreate?: Enumerable<menu_addonsCreateOrConnectWithoutAddonInput>
    createMany?: menu_addonsCreateManyAddonInputEnvelope
    connect?: Enumerable<menu_addonsWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type branches_addonsUpdateManyWithoutAddonsNestedInput = {
    create?: XOR<Enumerable<branches_addonsCreateWithoutAddonsInput>, Enumerable<branches_addonsUncheckedCreateWithoutAddonsInput>>
    connectOrCreate?: Enumerable<branches_addonsCreateOrConnectWithoutAddonsInput>
    upsert?: Enumerable<branches_addonsUpsertWithWhereUniqueWithoutAddonsInput>
    createMany?: branches_addonsCreateManyAddonsInputEnvelope
    set?: Enumerable<branches_addonsWhereUniqueInput>
    disconnect?: Enumerable<branches_addonsWhereUniqueInput>
    delete?: Enumerable<branches_addonsWhereUniqueInput>
    connect?: Enumerable<branches_addonsWhereUniqueInput>
    update?: Enumerable<branches_addonsUpdateWithWhereUniqueWithoutAddonsInput>
    updateMany?: Enumerable<branches_addonsUpdateManyWithWhereWithoutAddonsInput>
    deleteMany?: Enumerable<branches_addonsScalarWhereInput>
  }

  export type menu_addonsUpdateManyWithoutAddonNestedInput = {
    create?: XOR<Enumerable<menu_addonsCreateWithoutAddonInput>, Enumerable<menu_addonsUncheckedCreateWithoutAddonInput>>
    connectOrCreate?: Enumerable<menu_addonsCreateOrConnectWithoutAddonInput>
    upsert?: Enumerable<menu_addonsUpsertWithWhereUniqueWithoutAddonInput>
    createMany?: menu_addonsCreateManyAddonInputEnvelope
    set?: Enumerable<menu_addonsWhereUniqueInput>
    disconnect?: Enumerable<menu_addonsWhereUniqueInput>
    delete?: Enumerable<menu_addonsWhereUniqueInput>
    connect?: Enumerable<menu_addonsWhereUniqueInput>
    update?: Enumerable<menu_addonsUpdateWithWhereUniqueWithoutAddonInput>
    updateMany?: Enumerable<menu_addonsUpdateManyWithWhereWithoutAddonInput>
    deleteMany?: Enumerable<menu_addonsScalarWhereInput>
  }

  export type branches_addonsUncheckedUpdateManyWithoutAddonsNestedInput = {
    create?: XOR<Enumerable<branches_addonsCreateWithoutAddonsInput>, Enumerable<branches_addonsUncheckedCreateWithoutAddonsInput>>
    connectOrCreate?: Enumerable<branches_addonsCreateOrConnectWithoutAddonsInput>
    upsert?: Enumerable<branches_addonsUpsertWithWhereUniqueWithoutAddonsInput>
    createMany?: branches_addonsCreateManyAddonsInputEnvelope
    set?: Enumerable<branches_addonsWhereUniqueInput>
    disconnect?: Enumerable<branches_addonsWhereUniqueInput>
    delete?: Enumerable<branches_addonsWhereUniqueInput>
    connect?: Enumerable<branches_addonsWhereUniqueInput>
    update?: Enumerable<branches_addonsUpdateWithWhereUniqueWithoutAddonsInput>
    updateMany?: Enumerable<branches_addonsUpdateManyWithWhereWithoutAddonsInput>
    deleteMany?: Enumerable<branches_addonsScalarWhereInput>
  }

  export type menu_addonsUncheckedUpdateManyWithoutAddonNestedInput = {
    create?: XOR<Enumerable<menu_addonsCreateWithoutAddonInput>, Enumerable<menu_addonsUncheckedCreateWithoutAddonInput>>
    connectOrCreate?: Enumerable<menu_addonsCreateOrConnectWithoutAddonInput>
    upsert?: Enumerable<menu_addonsUpsertWithWhereUniqueWithoutAddonInput>
    createMany?: menu_addonsCreateManyAddonInputEnvelope
    set?: Enumerable<menu_addonsWhereUniqueInput>
    disconnect?: Enumerable<menu_addonsWhereUniqueInput>
    delete?: Enumerable<menu_addonsWhereUniqueInput>
    connect?: Enumerable<menu_addonsWhereUniqueInput>
    update?: Enumerable<menu_addonsUpdateWithWhereUniqueWithoutAddonInput>
    updateMany?: Enumerable<menu_addonsUpdateManyWithWhereWithoutAddonInput>
    deleteMany?: Enumerable<menu_addonsScalarWhereInput>
  }

  export type companiesCreateNestedOneWithoutBranchesInput = {
    create?: XOR<companiesCreateWithoutBranchesInput, companiesUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: companiesCreateOrConnectWithoutBranchesInput
    connect?: companiesWhereUniqueInput
  }

  export type townshipsCreateNestedOneWithoutBranchesInput = {
    create?: XOR<townshipsCreateWithoutBranchesInput, townshipsUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: townshipsCreateOrConnectWithoutBranchesInput
    connect?: townshipsWhereUniqueInput
  }

  export type branches_addonsCreateNestedManyWithoutBranchesInput = {
    create?: XOR<Enumerable<branches_addonsCreateWithoutBranchesInput>, Enumerable<branches_addonsUncheckedCreateWithoutBranchesInput>>
    connectOrCreate?: Enumerable<branches_addonsCreateOrConnectWithoutBranchesInput>
    createMany?: branches_addonsCreateManyBranchesInputEnvelope
    connect?: Enumerable<branches_addonsWhereUniqueInput>
  }

  export type branches_menucategories_menusCreateNestedManyWithoutBranchesInput = {
    create?: XOR<Enumerable<branches_menucategories_menusCreateWithoutBranchesInput>, Enumerable<branches_menucategories_menusUncheckedCreateWithoutBranchesInput>>
    connectOrCreate?: Enumerable<branches_menucategories_menusCreateOrConnectWithoutBranchesInput>
    createMany?: branches_menucategories_menusCreateManyBranchesInputEnvelope
    connect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
  }

  export type branches_addonsUncheckedCreateNestedManyWithoutBranchesInput = {
    create?: XOR<Enumerable<branches_addonsCreateWithoutBranchesInput>, Enumerable<branches_addonsUncheckedCreateWithoutBranchesInput>>
    connectOrCreate?: Enumerable<branches_addonsCreateOrConnectWithoutBranchesInput>
    createMany?: branches_addonsCreateManyBranchesInputEnvelope
    connect?: Enumerable<branches_addonsWhereUniqueInput>
  }

  export type branches_menucategories_menusUncheckedCreateNestedManyWithoutBranchesInput = {
    create?: XOR<Enumerable<branches_menucategories_menusCreateWithoutBranchesInput>, Enumerable<branches_menucategories_menusUncheckedCreateWithoutBranchesInput>>
    connectOrCreate?: Enumerable<branches_menucategories_menusCreateOrConnectWithoutBranchesInput>
    createMany?: branches_menucategories_menusCreateManyBranchesInputEnvelope
    connect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
  }

  export type companiesUpdateOneRequiredWithoutBranchesNestedInput = {
    create?: XOR<companiesCreateWithoutBranchesInput, companiesUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: companiesCreateOrConnectWithoutBranchesInput
    upsert?: companiesUpsertWithoutBranchesInput
    connect?: companiesWhereUniqueInput
    update?: XOR<companiesUpdateWithoutBranchesInput, companiesUncheckedUpdateWithoutBranchesInput>
  }

  export type townshipsUpdateOneRequiredWithoutBranchesNestedInput = {
    create?: XOR<townshipsCreateWithoutBranchesInput, townshipsUncheckedCreateWithoutBranchesInput>
    connectOrCreate?: townshipsCreateOrConnectWithoutBranchesInput
    upsert?: townshipsUpsertWithoutBranchesInput
    connect?: townshipsWhereUniqueInput
    update?: XOR<townshipsUpdateWithoutBranchesInput, townshipsUncheckedUpdateWithoutBranchesInput>
  }

  export type branches_addonsUpdateManyWithoutBranchesNestedInput = {
    create?: XOR<Enumerable<branches_addonsCreateWithoutBranchesInput>, Enumerable<branches_addonsUncheckedCreateWithoutBranchesInput>>
    connectOrCreate?: Enumerable<branches_addonsCreateOrConnectWithoutBranchesInput>
    upsert?: Enumerable<branches_addonsUpsertWithWhereUniqueWithoutBranchesInput>
    createMany?: branches_addonsCreateManyBranchesInputEnvelope
    set?: Enumerable<branches_addonsWhereUniqueInput>
    disconnect?: Enumerable<branches_addonsWhereUniqueInput>
    delete?: Enumerable<branches_addonsWhereUniqueInput>
    connect?: Enumerable<branches_addonsWhereUniqueInput>
    update?: Enumerable<branches_addonsUpdateWithWhereUniqueWithoutBranchesInput>
    updateMany?: Enumerable<branches_addonsUpdateManyWithWhereWithoutBranchesInput>
    deleteMany?: Enumerable<branches_addonsScalarWhereInput>
  }

  export type branches_menucategories_menusUpdateManyWithoutBranchesNestedInput = {
    create?: XOR<Enumerable<branches_menucategories_menusCreateWithoutBranchesInput>, Enumerable<branches_menucategories_menusUncheckedCreateWithoutBranchesInput>>
    connectOrCreate?: Enumerable<branches_menucategories_menusCreateOrConnectWithoutBranchesInput>
    upsert?: Enumerable<branches_menucategories_menusUpsertWithWhereUniqueWithoutBranchesInput>
    createMany?: branches_menucategories_menusCreateManyBranchesInputEnvelope
    set?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    disconnect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    delete?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    connect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    update?: Enumerable<branches_menucategories_menusUpdateWithWhereUniqueWithoutBranchesInput>
    updateMany?: Enumerable<branches_menucategories_menusUpdateManyWithWhereWithoutBranchesInput>
    deleteMany?: Enumerable<branches_menucategories_menusScalarWhereInput>
  }

  export type branches_addonsUncheckedUpdateManyWithoutBranchesNestedInput = {
    create?: XOR<Enumerable<branches_addonsCreateWithoutBranchesInput>, Enumerable<branches_addonsUncheckedCreateWithoutBranchesInput>>
    connectOrCreate?: Enumerable<branches_addonsCreateOrConnectWithoutBranchesInput>
    upsert?: Enumerable<branches_addonsUpsertWithWhereUniqueWithoutBranchesInput>
    createMany?: branches_addonsCreateManyBranchesInputEnvelope
    set?: Enumerable<branches_addonsWhereUniqueInput>
    disconnect?: Enumerable<branches_addonsWhereUniqueInput>
    delete?: Enumerable<branches_addonsWhereUniqueInput>
    connect?: Enumerable<branches_addonsWhereUniqueInput>
    update?: Enumerable<branches_addonsUpdateWithWhereUniqueWithoutBranchesInput>
    updateMany?: Enumerable<branches_addonsUpdateManyWithWhereWithoutBranchesInput>
    deleteMany?: Enumerable<branches_addonsScalarWhereInput>
  }

  export type branches_menucategories_menusUncheckedUpdateManyWithoutBranchesNestedInput = {
    create?: XOR<Enumerable<branches_menucategories_menusCreateWithoutBranchesInput>, Enumerable<branches_menucategories_menusUncheckedCreateWithoutBranchesInput>>
    connectOrCreate?: Enumerable<branches_menucategories_menusCreateOrConnectWithoutBranchesInput>
    upsert?: Enumerable<branches_menucategories_menusUpsertWithWhereUniqueWithoutBranchesInput>
    createMany?: branches_menucategories_menusCreateManyBranchesInputEnvelope
    set?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    disconnect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    delete?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    connect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    update?: Enumerable<branches_menucategories_menusUpdateWithWhereUniqueWithoutBranchesInput>
    updateMany?: Enumerable<branches_menucategories_menusUpdateManyWithWhereWithoutBranchesInput>
    deleteMany?: Enumerable<branches_menucategories_menusScalarWhereInput>
  }

  export type addonsCreateNestedOneWithoutBranches_addonsInput = {
    create?: XOR<addonsCreateWithoutBranches_addonsInput, addonsUncheckedCreateWithoutBranches_addonsInput>
    connectOrCreate?: addonsCreateOrConnectWithoutBranches_addonsInput
    connect?: addonsWhereUniqueInput
  }

  export type branchesCreateNestedOneWithoutBranches_addonsInput = {
    create?: XOR<branchesCreateWithoutBranches_addonsInput, branchesUncheckedCreateWithoutBranches_addonsInput>
    connectOrCreate?: branchesCreateOrConnectWithoutBranches_addonsInput
    connect?: branchesWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type addonsUpdateOneRequiredWithoutBranches_addonsNestedInput = {
    create?: XOR<addonsCreateWithoutBranches_addonsInput, addonsUncheckedCreateWithoutBranches_addonsInput>
    connectOrCreate?: addonsCreateOrConnectWithoutBranches_addonsInput
    upsert?: addonsUpsertWithoutBranches_addonsInput
    connect?: addonsWhereUniqueInput
    update?: XOR<addonsUpdateWithoutBranches_addonsInput, addonsUncheckedUpdateWithoutBranches_addonsInput>
  }

  export type branchesUpdateOneRequiredWithoutBranches_addonsNestedInput = {
    create?: XOR<branchesCreateWithoutBranches_addonsInput, branchesUncheckedCreateWithoutBranches_addonsInput>
    connectOrCreate?: branchesCreateOrConnectWithoutBranches_addonsInput
    upsert?: branchesUpsertWithoutBranches_addonsInput
    connect?: branchesWhereUniqueInput
    update?: XOR<branchesUpdateWithoutBranches_addonsInput, branchesUncheckedUpdateWithoutBranches_addonsInput>
  }

  export type menusCreateNestedOneWithoutBranches_menucategories_menusInput = {
    create?: XOR<menusCreateWithoutBranches_menucategories_menusInput, menusUncheckedCreateWithoutBranches_menucategories_menusInput>
    connectOrCreate?: menusCreateOrConnectWithoutBranches_menucategories_menusInput
    connect?: menusWhereUniqueInput
  }

  export type menu_categoriesCreateNestedOneWithoutBranches_menucategories_menusInput = {
    create?: XOR<menu_categoriesCreateWithoutBranches_menucategories_menusInput, menu_categoriesUncheckedCreateWithoutBranches_menucategories_menusInput>
    connectOrCreate?: menu_categoriesCreateOrConnectWithoutBranches_menucategories_menusInput
    connect?: menu_categoriesWhereUniqueInput
  }

  export type branchesCreateNestedOneWithoutBranches_menucategories_menusInput = {
    create?: XOR<branchesCreateWithoutBranches_menucategories_menusInput, branchesUncheckedCreateWithoutBranches_menucategories_menusInput>
    connectOrCreate?: branchesCreateOrConnectWithoutBranches_menucategories_menusInput
    connect?: branchesWhereUniqueInput
  }

  export type menusUpdateOneWithoutBranches_menucategories_menusNestedInput = {
    create?: XOR<menusCreateWithoutBranches_menucategories_menusInput, menusUncheckedCreateWithoutBranches_menucategories_menusInput>
    connectOrCreate?: menusCreateOrConnectWithoutBranches_menucategories_menusInput
    upsert?: menusUpsertWithoutBranches_menucategories_menusInput
    disconnect?: boolean
    delete?: boolean
    connect?: menusWhereUniqueInput
    update?: XOR<menusUpdateWithoutBranches_menucategories_menusInput, menusUncheckedUpdateWithoutBranches_menucategories_menusInput>
  }

  export type menu_categoriesUpdateOneRequiredWithoutBranches_menucategories_menusNestedInput = {
    create?: XOR<menu_categoriesCreateWithoutBranches_menucategories_menusInput, menu_categoriesUncheckedCreateWithoutBranches_menucategories_menusInput>
    connectOrCreate?: menu_categoriesCreateOrConnectWithoutBranches_menucategories_menusInput
    upsert?: menu_categoriesUpsertWithoutBranches_menucategories_menusInput
    connect?: menu_categoriesWhereUniqueInput
    update?: XOR<menu_categoriesUpdateWithoutBranches_menucategories_menusInput, menu_categoriesUncheckedUpdateWithoutBranches_menucategories_menusInput>
  }

  export type branchesUpdateOneRequiredWithoutBranches_menucategories_menusNestedInput = {
    create?: XOR<branchesCreateWithoutBranches_menucategories_menusInput, branchesUncheckedCreateWithoutBranches_menucategories_menusInput>
    connectOrCreate?: branchesCreateOrConnectWithoutBranches_menucategories_menusInput
    upsert?: branchesUpsertWithoutBranches_menucategories_menusInput
    connect?: branchesWhereUniqueInput
    update?: XOR<branchesUpdateWithoutBranches_menucategories_menusInput, branchesUncheckedUpdateWithoutBranches_menucategories_menusInput>
  }

  export type branchesCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<Enumerable<branchesCreateWithoutCompaniesInput>, Enumerable<branchesUncheckedCreateWithoutCompaniesInput>>
    connectOrCreate?: Enumerable<branchesCreateOrConnectWithoutCompaniesInput>
    createMany?: branchesCreateManyCompaniesInputEnvelope
    connect?: Enumerable<branchesWhereUniqueInput>
  }

  export type usersCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<Enumerable<usersCreateWithoutCompaniesInput>, Enumerable<usersUncheckedCreateWithoutCompaniesInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutCompaniesInput>
    createMany?: usersCreateManyCompaniesInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type branchesUncheckedCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<Enumerable<branchesCreateWithoutCompaniesInput>, Enumerable<branchesUncheckedCreateWithoutCompaniesInput>>
    connectOrCreate?: Enumerable<branchesCreateOrConnectWithoutCompaniesInput>
    createMany?: branchesCreateManyCompaniesInputEnvelope
    connect?: Enumerable<branchesWhereUniqueInput>
  }

  export type usersUncheckedCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<Enumerable<usersCreateWithoutCompaniesInput>, Enumerable<usersUncheckedCreateWithoutCompaniesInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutCompaniesInput>
    createMany?: usersCreateManyCompaniesInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type branchesUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<Enumerable<branchesCreateWithoutCompaniesInput>, Enumerable<branchesUncheckedCreateWithoutCompaniesInput>>
    connectOrCreate?: Enumerable<branchesCreateOrConnectWithoutCompaniesInput>
    upsert?: Enumerable<branchesUpsertWithWhereUniqueWithoutCompaniesInput>
    createMany?: branchesCreateManyCompaniesInputEnvelope
    set?: Enumerable<branchesWhereUniqueInput>
    disconnect?: Enumerable<branchesWhereUniqueInput>
    delete?: Enumerable<branchesWhereUniqueInput>
    connect?: Enumerable<branchesWhereUniqueInput>
    update?: Enumerable<branchesUpdateWithWhereUniqueWithoutCompaniesInput>
    updateMany?: Enumerable<branchesUpdateManyWithWhereWithoutCompaniesInput>
    deleteMany?: Enumerable<branchesScalarWhereInput>
  }

  export type usersUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutCompaniesInput>, Enumerable<usersUncheckedCreateWithoutCompaniesInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutCompaniesInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutCompaniesInput>
    createMany?: usersCreateManyCompaniesInputEnvelope
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutCompaniesInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutCompaniesInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type branchesUncheckedUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<Enumerable<branchesCreateWithoutCompaniesInput>, Enumerable<branchesUncheckedCreateWithoutCompaniesInput>>
    connectOrCreate?: Enumerable<branchesCreateOrConnectWithoutCompaniesInput>
    upsert?: Enumerable<branchesUpsertWithWhereUniqueWithoutCompaniesInput>
    createMany?: branchesCreateManyCompaniesInputEnvelope
    set?: Enumerable<branchesWhereUniqueInput>
    disconnect?: Enumerable<branchesWhereUniqueInput>
    delete?: Enumerable<branchesWhereUniqueInput>
    connect?: Enumerable<branchesWhereUniqueInput>
    update?: Enumerable<branchesUpdateWithWhereUniqueWithoutCompaniesInput>
    updateMany?: Enumerable<branchesUpdateManyWithWhereWithoutCompaniesInput>
    deleteMany?: Enumerable<branchesScalarWhereInput>
  }

  export type usersUncheckedUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutCompaniesInput>, Enumerable<usersUncheckedCreateWithoutCompaniesInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutCompaniesInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutCompaniesInput>
    createMany?: usersCreateManyCompaniesInputEnvelope
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutCompaniesInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutCompaniesInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type branches_menucategories_menusCreateNestedManyWithoutMenu_categoriesInput = {
    create?: XOR<Enumerable<branches_menucategories_menusCreateWithoutMenu_categoriesInput>, Enumerable<branches_menucategories_menusUncheckedCreateWithoutMenu_categoriesInput>>
    connectOrCreate?: Enumerable<branches_menucategories_menusCreateOrConnectWithoutMenu_categoriesInput>
    createMany?: branches_menucategories_menusCreateManyMenu_categoriesInputEnvelope
    connect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
  }

  export type branches_menucategories_menusUncheckedCreateNestedManyWithoutMenu_categoriesInput = {
    create?: XOR<Enumerable<branches_menucategories_menusCreateWithoutMenu_categoriesInput>, Enumerable<branches_menucategories_menusUncheckedCreateWithoutMenu_categoriesInput>>
    connectOrCreate?: Enumerable<branches_menucategories_menusCreateOrConnectWithoutMenu_categoriesInput>
    createMany?: branches_menucategories_menusCreateManyMenu_categoriesInputEnvelope
    connect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
  }

  export type branches_menucategories_menusUpdateManyWithoutMenu_categoriesNestedInput = {
    create?: XOR<Enumerable<branches_menucategories_menusCreateWithoutMenu_categoriesInput>, Enumerable<branches_menucategories_menusUncheckedCreateWithoutMenu_categoriesInput>>
    connectOrCreate?: Enumerable<branches_menucategories_menusCreateOrConnectWithoutMenu_categoriesInput>
    upsert?: Enumerable<branches_menucategories_menusUpsertWithWhereUniqueWithoutMenu_categoriesInput>
    createMany?: branches_menucategories_menusCreateManyMenu_categoriesInputEnvelope
    set?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    disconnect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    delete?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    connect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    update?: Enumerable<branches_menucategories_menusUpdateWithWhereUniqueWithoutMenu_categoriesInput>
    updateMany?: Enumerable<branches_menucategories_menusUpdateManyWithWhereWithoutMenu_categoriesInput>
    deleteMany?: Enumerable<branches_menucategories_menusScalarWhereInput>
  }

  export type branches_menucategories_menusUncheckedUpdateManyWithoutMenu_categoriesNestedInput = {
    create?: XOR<Enumerable<branches_menucategories_menusCreateWithoutMenu_categoriesInput>, Enumerable<branches_menucategories_menusUncheckedCreateWithoutMenu_categoriesInput>>
    connectOrCreate?: Enumerable<branches_menucategories_menusCreateOrConnectWithoutMenu_categoriesInput>
    upsert?: Enumerable<branches_menucategories_menusUpsertWithWhereUniqueWithoutMenu_categoriesInput>
    createMany?: branches_menucategories_menusCreateManyMenu_categoriesInputEnvelope
    set?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    disconnect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    delete?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    connect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    update?: Enumerable<branches_menucategories_menusUpdateWithWhereUniqueWithoutMenu_categoriesInput>
    updateMany?: Enumerable<branches_menucategories_menusUpdateManyWithWhereWithoutMenu_categoriesInput>
    deleteMany?: Enumerable<branches_menucategories_menusScalarWhereInput>
  }

  export type branches_menucategories_menusCreateNestedManyWithoutMenusInput = {
    create?: XOR<Enumerable<branches_menucategories_menusCreateWithoutMenusInput>, Enumerable<branches_menucategories_menusUncheckedCreateWithoutMenusInput>>
    connectOrCreate?: Enumerable<branches_menucategories_menusCreateOrConnectWithoutMenusInput>
    createMany?: branches_menucategories_menusCreateManyMenusInputEnvelope
    connect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
  }

  export type menu_addonsCreateNestedManyWithoutMenuInput = {
    create?: XOR<Enumerable<menu_addonsCreateWithoutMenuInput>, Enumerable<menu_addonsUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<menu_addonsCreateOrConnectWithoutMenuInput>
    createMany?: menu_addonsCreateManyMenuInputEnvelope
    connect?: Enumerable<menu_addonsWhereUniqueInput>
  }

  export type branches_menucategories_menusUncheckedCreateNestedManyWithoutMenusInput = {
    create?: XOR<Enumerable<branches_menucategories_menusCreateWithoutMenusInput>, Enumerable<branches_menucategories_menusUncheckedCreateWithoutMenusInput>>
    connectOrCreate?: Enumerable<branches_menucategories_menusCreateOrConnectWithoutMenusInput>
    createMany?: branches_menucategories_menusCreateManyMenusInputEnvelope
    connect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
  }

  export type menu_addonsUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<Enumerable<menu_addonsCreateWithoutMenuInput>, Enumerable<menu_addonsUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<menu_addonsCreateOrConnectWithoutMenuInput>
    createMany?: menu_addonsCreateManyMenuInputEnvelope
    connect?: Enumerable<menu_addonsWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type branches_menucategories_menusUpdateManyWithoutMenusNestedInput = {
    create?: XOR<Enumerable<branches_menucategories_menusCreateWithoutMenusInput>, Enumerable<branches_menucategories_menusUncheckedCreateWithoutMenusInput>>
    connectOrCreate?: Enumerable<branches_menucategories_menusCreateOrConnectWithoutMenusInput>
    upsert?: Enumerable<branches_menucategories_menusUpsertWithWhereUniqueWithoutMenusInput>
    createMany?: branches_menucategories_menusCreateManyMenusInputEnvelope
    set?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    disconnect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    delete?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    connect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    update?: Enumerable<branches_menucategories_menusUpdateWithWhereUniqueWithoutMenusInput>
    updateMany?: Enumerable<branches_menucategories_menusUpdateManyWithWhereWithoutMenusInput>
    deleteMany?: Enumerable<branches_menucategories_menusScalarWhereInput>
  }

  export type menu_addonsUpdateManyWithoutMenuNestedInput = {
    create?: XOR<Enumerable<menu_addonsCreateWithoutMenuInput>, Enumerable<menu_addonsUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<menu_addonsCreateOrConnectWithoutMenuInput>
    upsert?: Enumerable<menu_addonsUpsertWithWhereUniqueWithoutMenuInput>
    createMany?: menu_addonsCreateManyMenuInputEnvelope
    set?: Enumerable<menu_addonsWhereUniqueInput>
    disconnect?: Enumerable<menu_addonsWhereUniqueInput>
    delete?: Enumerable<menu_addonsWhereUniqueInput>
    connect?: Enumerable<menu_addonsWhereUniqueInput>
    update?: Enumerable<menu_addonsUpdateWithWhereUniqueWithoutMenuInput>
    updateMany?: Enumerable<menu_addonsUpdateManyWithWhereWithoutMenuInput>
    deleteMany?: Enumerable<menu_addonsScalarWhereInput>
  }

  export type branches_menucategories_menusUncheckedUpdateManyWithoutMenusNestedInput = {
    create?: XOR<Enumerable<branches_menucategories_menusCreateWithoutMenusInput>, Enumerable<branches_menucategories_menusUncheckedCreateWithoutMenusInput>>
    connectOrCreate?: Enumerable<branches_menucategories_menusCreateOrConnectWithoutMenusInput>
    upsert?: Enumerable<branches_menucategories_menusUpsertWithWhereUniqueWithoutMenusInput>
    createMany?: branches_menucategories_menusCreateManyMenusInputEnvelope
    set?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    disconnect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    delete?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    connect?: Enumerable<branches_menucategories_menusWhereUniqueInput>
    update?: Enumerable<branches_menucategories_menusUpdateWithWhereUniqueWithoutMenusInput>
    updateMany?: Enumerable<branches_menucategories_menusUpdateManyWithWhereWithoutMenusInput>
    deleteMany?: Enumerable<branches_menucategories_menusScalarWhereInput>
  }

  export type menu_addonsUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<Enumerable<menu_addonsCreateWithoutMenuInput>, Enumerable<menu_addonsUncheckedCreateWithoutMenuInput>>
    connectOrCreate?: Enumerable<menu_addonsCreateOrConnectWithoutMenuInput>
    upsert?: Enumerable<menu_addonsUpsertWithWhereUniqueWithoutMenuInput>
    createMany?: menu_addonsCreateManyMenuInputEnvelope
    set?: Enumerable<menu_addonsWhereUniqueInput>
    disconnect?: Enumerable<menu_addonsWhereUniqueInput>
    delete?: Enumerable<menu_addonsWhereUniqueInput>
    connect?: Enumerable<menu_addonsWhereUniqueInput>
    update?: Enumerable<menu_addonsUpdateWithWhereUniqueWithoutMenuInput>
    updateMany?: Enumerable<menu_addonsUpdateManyWithWhereWithoutMenuInput>
    deleteMany?: Enumerable<menu_addonsScalarWhereInput>
  }

  export type menusCreateNestedOneWithoutMenus_addoncats_addonsInput = {
    create?: XOR<menusCreateWithoutMenus_addoncats_addonsInput, menusUncheckedCreateWithoutMenus_addoncats_addonsInput>
    connectOrCreate?: menusCreateOrConnectWithoutMenus_addoncats_addonsInput
    connect?: menusWhereUniqueInput
  }

  export type addonsCreateNestedOneWithoutMenu_addonsInput = {
    create?: XOR<addonsCreateWithoutMenu_addonsInput, addonsUncheckedCreateWithoutMenu_addonsInput>
    connectOrCreate?: addonsCreateOrConnectWithoutMenu_addonsInput
    connect?: addonsWhereUniqueInput
  }

  export type addon_categoriesCreateNestedManyWithoutMenu_addonsInput = {
    create?: XOR<Enumerable<addon_categoriesCreateWithoutMenu_addonsInput>, Enumerable<addon_categoriesUncheckedCreateWithoutMenu_addonsInput>>
    connectOrCreate?: Enumerable<addon_categoriesCreateOrConnectWithoutMenu_addonsInput>
    connect?: Enumerable<addon_categoriesWhereUniqueInput>
  }

  export type addon_categoriesUncheckedCreateNestedManyWithoutMenu_addonsInput = {
    create?: XOR<Enumerable<addon_categoriesCreateWithoutMenu_addonsInput>, Enumerable<addon_categoriesUncheckedCreateWithoutMenu_addonsInput>>
    connectOrCreate?: Enumerable<addon_categoriesCreateOrConnectWithoutMenu_addonsInput>
    connect?: Enumerable<addon_categoriesWhereUniqueInput>
  }

  export type menusUpdateOneRequiredWithoutMenus_addoncats_addonsNestedInput = {
    create?: XOR<menusCreateWithoutMenus_addoncats_addonsInput, menusUncheckedCreateWithoutMenus_addoncats_addonsInput>
    connectOrCreate?: menusCreateOrConnectWithoutMenus_addoncats_addonsInput
    upsert?: menusUpsertWithoutMenus_addoncats_addonsInput
    connect?: menusWhereUniqueInput
    update?: XOR<menusUpdateWithoutMenus_addoncats_addonsInput, menusUncheckedUpdateWithoutMenus_addoncats_addonsInput>
  }

  export type addonsUpdateOneRequiredWithoutMenu_addonsNestedInput = {
    create?: XOR<addonsCreateWithoutMenu_addonsInput, addonsUncheckedCreateWithoutMenu_addonsInput>
    connectOrCreate?: addonsCreateOrConnectWithoutMenu_addonsInput
    upsert?: addonsUpsertWithoutMenu_addonsInput
    connect?: addonsWhereUniqueInput
    update?: XOR<addonsUpdateWithoutMenu_addonsInput, addonsUncheckedUpdateWithoutMenu_addonsInput>
  }

  export type addon_categoriesUpdateManyWithoutMenu_addonsNestedInput = {
    create?: XOR<Enumerable<addon_categoriesCreateWithoutMenu_addonsInput>, Enumerable<addon_categoriesUncheckedCreateWithoutMenu_addonsInput>>
    connectOrCreate?: Enumerable<addon_categoriesCreateOrConnectWithoutMenu_addonsInput>
    upsert?: Enumerable<addon_categoriesUpsertWithWhereUniqueWithoutMenu_addonsInput>
    set?: Enumerable<addon_categoriesWhereUniqueInput>
    disconnect?: Enumerable<addon_categoriesWhereUniqueInput>
    delete?: Enumerable<addon_categoriesWhereUniqueInput>
    connect?: Enumerable<addon_categoriesWhereUniqueInput>
    update?: Enumerable<addon_categoriesUpdateWithWhereUniqueWithoutMenu_addonsInput>
    updateMany?: Enumerable<addon_categoriesUpdateManyWithWhereWithoutMenu_addonsInput>
    deleteMany?: Enumerable<addon_categoriesScalarWhereInput>
  }

  export type addon_categoriesUncheckedUpdateManyWithoutMenu_addonsNestedInput = {
    create?: XOR<Enumerable<addon_categoriesCreateWithoutMenu_addonsInput>, Enumerable<addon_categoriesUncheckedCreateWithoutMenu_addonsInput>>
    connectOrCreate?: Enumerable<addon_categoriesCreateOrConnectWithoutMenu_addonsInput>
    upsert?: Enumerable<addon_categoriesUpsertWithWhereUniqueWithoutMenu_addonsInput>
    set?: Enumerable<addon_categoriesWhereUniqueInput>
    disconnect?: Enumerable<addon_categoriesWhereUniqueInput>
    delete?: Enumerable<addon_categoriesWhereUniqueInput>
    connect?: Enumerable<addon_categoriesWhereUniqueInput>
    update?: Enumerable<addon_categoriesUpdateWithWhereUniqueWithoutMenu_addonsInput>
    updateMany?: Enumerable<addon_categoriesUpdateManyWithWhereWithoutMenu_addonsInput>
    deleteMany?: Enumerable<addon_categoriesScalarWhereInput>
  }

  export type branchesCreateNestedManyWithoutTownshipsInput = {
    create?: XOR<Enumerable<branchesCreateWithoutTownshipsInput>, Enumerable<branchesUncheckedCreateWithoutTownshipsInput>>
    connectOrCreate?: Enumerable<branchesCreateOrConnectWithoutTownshipsInput>
    createMany?: branchesCreateManyTownshipsInputEnvelope
    connect?: Enumerable<branchesWhereUniqueInput>
  }

  export type branchesUncheckedCreateNestedManyWithoutTownshipsInput = {
    create?: XOR<Enumerable<branchesCreateWithoutTownshipsInput>, Enumerable<branchesUncheckedCreateWithoutTownshipsInput>>
    connectOrCreate?: Enumerable<branchesCreateOrConnectWithoutTownshipsInput>
    createMany?: branchesCreateManyTownshipsInputEnvelope
    connect?: Enumerable<branchesWhereUniqueInput>
  }

  export type branchesUpdateManyWithoutTownshipsNestedInput = {
    create?: XOR<Enumerable<branchesCreateWithoutTownshipsInput>, Enumerable<branchesUncheckedCreateWithoutTownshipsInput>>
    connectOrCreate?: Enumerable<branchesCreateOrConnectWithoutTownshipsInput>
    upsert?: Enumerable<branchesUpsertWithWhereUniqueWithoutTownshipsInput>
    createMany?: branchesCreateManyTownshipsInputEnvelope
    set?: Enumerable<branchesWhereUniqueInput>
    disconnect?: Enumerable<branchesWhereUniqueInput>
    delete?: Enumerable<branchesWhereUniqueInput>
    connect?: Enumerable<branchesWhereUniqueInput>
    update?: Enumerable<branchesUpdateWithWhereUniqueWithoutTownshipsInput>
    updateMany?: Enumerable<branchesUpdateManyWithWhereWithoutTownshipsInput>
    deleteMany?: Enumerable<branchesScalarWhereInput>
  }

  export type branchesUncheckedUpdateManyWithoutTownshipsNestedInput = {
    create?: XOR<Enumerable<branchesCreateWithoutTownshipsInput>, Enumerable<branchesUncheckedCreateWithoutTownshipsInput>>
    connectOrCreate?: Enumerable<branchesCreateOrConnectWithoutTownshipsInput>
    upsert?: Enumerable<branchesUpsertWithWhereUniqueWithoutTownshipsInput>
    createMany?: branchesCreateManyTownshipsInputEnvelope
    set?: Enumerable<branchesWhereUniqueInput>
    disconnect?: Enumerable<branchesWhereUniqueInput>
    delete?: Enumerable<branchesWhereUniqueInput>
    connect?: Enumerable<branchesWhereUniqueInput>
    update?: Enumerable<branchesUpdateWithWhereUniqueWithoutTownshipsInput>
    updateMany?: Enumerable<branchesUpdateManyWithWhereWithoutTownshipsInput>
    deleteMany?: Enumerable<branchesScalarWhereInput>
  }

  export type companiesCreateNestedOneWithoutUsersInput = {
    create?: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: companiesCreateOrConnectWithoutUsersInput
    connect?: companiesWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type companiesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: companiesCreateOrConnectWithoutUsersInput
    upsert?: companiesUpsertWithoutUsersInput
    connect?: companiesWhereUniqueInput
    update?: XOR<companiesUpdateWithoutUsersInput, companiesUncheckedUpdateWithoutUsersInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type menu_addonsCreateWithoutAddon_categoriesInput = {
    price: number
    menu: menusCreateNestedOneWithoutMenus_addoncats_addonsInput
    addon: addonsCreateNestedOneWithoutMenu_addonsInput
  }

  export type menu_addonsUncheckedCreateWithoutAddon_categoriesInput = {
    id?: number
    menu_id: number
    addon_id: number
    price: number
  }

  export type menu_addonsCreateOrConnectWithoutAddon_categoriesInput = {
    where: menu_addonsWhereUniqueInput
    create: XOR<menu_addonsCreateWithoutAddon_categoriesInput, menu_addonsUncheckedCreateWithoutAddon_categoriesInput>
  }

  export type menu_addonsUpsertWithWhereUniqueWithoutAddon_categoriesInput = {
    where: menu_addonsWhereUniqueInput
    update: XOR<menu_addonsUpdateWithoutAddon_categoriesInput, menu_addonsUncheckedUpdateWithoutAddon_categoriesInput>
    create: XOR<menu_addonsCreateWithoutAddon_categoriesInput, menu_addonsUncheckedCreateWithoutAddon_categoriesInput>
  }

  export type menu_addonsUpdateWithWhereUniqueWithoutAddon_categoriesInput = {
    where: menu_addonsWhereUniqueInput
    data: XOR<menu_addonsUpdateWithoutAddon_categoriesInput, menu_addonsUncheckedUpdateWithoutAddon_categoriesInput>
  }

  export type menu_addonsUpdateManyWithWhereWithoutAddon_categoriesInput = {
    where: menu_addonsScalarWhereInput
    data: XOR<menu_addonsUpdateManyMutationInput, menu_addonsUncheckedUpdateManyWithoutMenu_addonsInput>
  }

  export type menu_addonsScalarWhereInput = {
    AND?: Enumerable<menu_addonsScalarWhereInput>
    OR?: Enumerable<menu_addonsScalarWhereInput>
    NOT?: Enumerable<menu_addonsScalarWhereInput>
    id?: IntFilter | number
    menu_id?: IntFilter | number
    addon_id?: IntFilter | number
    price?: IntFilter | number
  }

  export type branches_addonsCreateWithoutAddonsInput = {
    is_available?: boolean | null
    branches: branchesCreateNestedOneWithoutBranches_addonsInput
  }

  export type branches_addonsUncheckedCreateWithoutAddonsInput = {
    id?: number
    branch_id: number
    is_available?: boolean | null
  }

  export type branches_addonsCreateOrConnectWithoutAddonsInput = {
    where: branches_addonsWhereUniqueInput
    create: XOR<branches_addonsCreateWithoutAddonsInput, branches_addonsUncheckedCreateWithoutAddonsInput>
  }

  export type branches_addonsCreateManyAddonsInputEnvelope = {
    data: Enumerable<branches_addonsCreateManyAddonsInput>
    skipDuplicates?: boolean
  }

  export type menu_addonsCreateWithoutAddonInput = {
    price: number
    menu: menusCreateNestedOneWithoutMenus_addoncats_addonsInput
    addon_categories?: addon_categoriesCreateNestedManyWithoutMenu_addonsInput
  }

  export type menu_addonsUncheckedCreateWithoutAddonInput = {
    id?: number
    menu_id: number
    price: number
    addon_categories?: addon_categoriesUncheckedCreateNestedManyWithoutMenu_addonsInput
  }

  export type menu_addonsCreateOrConnectWithoutAddonInput = {
    where: menu_addonsWhereUniqueInput
    create: XOR<menu_addonsCreateWithoutAddonInput, menu_addonsUncheckedCreateWithoutAddonInput>
  }

  export type menu_addonsCreateManyAddonInputEnvelope = {
    data: Enumerable<menu_addonsCreateManyAddonInput>
    skipDuplicates?: boolean
  }

  export type branches_addonsUpsertWithWhereUniqueWithoutAddonsInput = {
    where: branches_addonsWhereUniqueInput
    update: XOR<branches_addonsUpdateWithoutAddonsInput, branches_addonsUncheckedUpdateWithoutAddonsInput>
    create: XOR<branches_addonsCreateWithoutAddonsInput, branches_addonsUncheckedCreateWithoutAddonsInput>
  }

  export type branches_addonsUpdateWithWhereUniqueWithoutAddonsInput = {
    where: branches_addonsWhereUniqueInput
    data: XOR<branches_addonsUpdateWithoutAddonsInput, branches_addonsUncheckedUpdateWithoutAddonsInput>
  }

  export type branches_addonsUpdateManyWithWhereWithoutAddonsInput = {
    where: branches_addonsScalarWhereInput
    data: XOR<branches_addonsUpdateManyMutationInput, branches_addonsUncheckedUpdateManyWithoutBranches_addonsInput>
  }

  export type branches_addonsScalarWhereInput = {
    AND?: Enumerable<branches_addonsScalarWhereInput>
    OR?: Enumerable<branches_addonsScalarWhereInput>
    NOT?: Enumerable<branches_addonsScalarWhereInput>
    id?: IntFilter | number
    addon_id?: IntFilter | number
    branch_id?: IntFilter | number
    is_available?: BoolNullableFilter | boolean | null
  }

  export type menu_addonsUpsertWithWhereUniqueWithoutAddonInput = {
    where: menu_addonsWhereUniqueInput
    update: XOR<menu_addonsUpdateWithoutAddonInput, menu_addonsUncheckedUpdateWithoutAddonInput>
    create: XOR<menu_addonsCreateWithoutAddonInput, menu_addonsUncheckedCreateWithoutAddonInput>
  }

  export type menu_addonsUpdateWithWhereUniqueWithoutAddonInput = {
    where: menu_addonsWhereUniqueInput
    data: XOR<menu_addonsUpdateWithoutAddonInput, menu_addonsUncheckedUpdateWithoutAddonInput>
  }

  export type menu_addonsUpdateManyWithWhereWithoutAddonInput = {
    where: menu_addonsScalarWhereInput
    data: XOR<menu_addonsUpdateManyMutationInput, menu_addonsUncheckedUpdateManyWithoutMenu_addonsInput>
  }

  export type companiesCreateWithoutBranchesInput = {
    name: string
    users?: usersCreateNestedManyWithoutCompaniesInput
  }

  export type companiesUncheckedCreateWithoutBranchesInput = {
    id?: number
    name: string
    users?: usersUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type companiesCreateOrConnectWithoutBranchesInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutBranchesInput, companiesUncheckedCreateWithoutBranchesInput>
  }

  export type townshipsCreateWithoutBranchesInput = {
    name: string
  }

  export type townshipsUncheckedCreateWithoutBranchesInput = {
    id?: number
    name: string
  }

  export type townshipsCreateOrConnectWithoutBranchesInput = {
    where: townshipsWhereUniqueInput
    create: XOR<townshipsCreateWithoutBranchesInput, townshipsUncheckedCreateWithoutBranchesInput>
  }

  export type branches_addonsCreateWithoutBranchesInput = {
    is_available?: boolean | null
    addons: addonsCreateNestedOneWithoutBranches_addonsInput
  }

  export type branches_addonsUncheckedCreateWithoutBranchesInput = {
    id?: number
    addon_id: number
    is_available?: boolean | null
  }

  export type branches_addonsCreateOrConnectWithoutBranchesInput = {
    where: branches_addonsWhereUniqueInput
    create: XOR<branches_addonsCreateWithoutBranchesInput, branches_addonsUncheckedCreateWithoutBranchesInput>
  }

  export type branches_addonsCreateManyBranchesInputEnvelope = {
    data: Enumerable<branches_addonsCreateManyBranchesInput>
    skipDuplicates?: boolean
  }

  export type branches_menucategories_menusCreateWithoutBranchesInput = {
    is_available?: boolean
    menus?: menusCreateNestedOneWithoutBranches_menucategories_menusInput
    menu_categories: menu_categoriesCreateNestedOneWithoutBranches_menucategories_menusInput
  }

  export type branches_menucategories_menusUncheckedCreateWithoutBranchesInput = {
    id?: number
    menu_id?: number | null
    menucategory_id: number
    is_available?: boolean
  }

  export type branches_menucategories_menusCreateOrConnectWithoutBranchesInput = {
    where: branches_menucategories_menusWhereUniqueInput
    create: XOR<branches_menucategories_menusCreateWithoutBranchesInput, branches_menucategories_menusUncheckedCreateWithoutBranchesInput>
  }

  export type branches_menucategories_menusCreateManyBranchesInputEnvelope = {
    data: Enumerable<branches_menucategories_menusCreateManyBranchesInput>
    skipDuplicates?: boolean
  }

  export type companiesUpsertWithoutBranchesInput = {
    update: XOR<companiesUpdateWithoutBranchesInput, companiesUncheckedUpdateWithoutBranchesInput>
    create: XOR<companiesCreateWithoutBranchesInput, companiesUncheckedCreateWithoutBranchesInput>
  }

  export type companiesUpdateWithoutBranchesInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateManyWithoutCompaniesNestedInput
  }

  export type companiesUncheckedUpdateWithoutBranchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: usersUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type townshipsUpsertWithoutBranchesInput = {
    update: XOR<townshipsUpdateWithoutBranchesInput, townshipsUncheckedUpdateWithoutBranchesInput>
    create: XOR<townshipsCreateWithoutBranchesInput, townshipsUncheckedCreateWithoutBranchesInput>
  }

  export type townshipsUpdateWithoutBranchesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type townshipsUncheckedUpdateWithoutBranchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type branches_addonsUpsertWithWhereUniqueWithoutBranchesInput = {
    where: branches_addonsWhereUniqueInput
    update: XOR<branches_addonsUpdateWithoutBranchesInput, branches_addonsUncheckedUpdateWithoutBranchesInput>
    create: XOR<branches_addonsCreateWithoutBranchesInput, branches_addonsUncheckedCreateWithoutBranchesInput>
  }

  export type branches_addonsUpdateWithWhereUniqueWithoutBranchesInput = {
    where: branches_addonsWhereUniqueInput
    data: XOR<branches_addonsUpdateWithoutBranchesInput, branches_addonsUncheckedUpdateWithoutBranchesInput>
  }

  export type branches_addonsUpdateManyWithWhereWithoutBranchesInput = {
    where: branches_addonsScalarWhereInput
    data: XOR<branches_addonsUpdateManyMutationInput, branches_addonsUncheckedUpdateManyWithoutBranches_addonsInput>
  }

  export type branches_menucategories_menusUpsertWithWhereUniqueWithoutBranchesInput = {
    where: branches_menucategories_menusWhereUniqueInput
    update: XOR<branches_menucategories_menusUpdateWithoutBranchesInput, branches_menucategories_menusUncheckedUpdateWithoutBranchesInput>
    create: XOR<branches_menucategories_menusCreateWithoutBranchesInput, branches_menucategories_menusUncheckedCreateWithoutBranchesInput>
  }

  export type branches_menucategories_menusUpdateWithWhereUniqueWithoutBranchesInput = {
    where: branches_menucategories_menusWhereUniqueInput
    data: XOR<branches_menucategories_menusUpdateWithoutBranchesInput, branches_menucategories_menusUncheckedUpdateWithoutBranchesInput>
  }

  export type branches_menucategories_menusUpdateManyWithWhereWithoutBranchesInput = {
    where: branches_menucategories_menusScalarWhereInput
    data: XOR<branches_menucategories_menusUpdateManyMutationInput, branches_menucategories_menusUncheckedUpdateManyWithoutBranches_menucategories_menusInput>
  }

  export type branches_menucategories_menusScalarWhereInput = {
    AND?: Enumerable<branches_menucategories_menusScalarWhereInput>
    OR?: Enumerable<branches_menucategories_menusScalarWhereInput>
    NOT?: Enumerable<branches_menucategories_menusScalarWhereInput>
    id?: IntFilter | number
    menu_id?: IntNullableFilter | number | null
    branch_id?: IntFilter | number
    menucategory_id?: IntFilter | number
    is_available?: BoolFilter | boolean
  }

  export type addonsCreateWithoutBranches_addonsInput = {
    name: string
    addon_categories_id?: number | null
    menu_addons?: menu_addonsCreateNestedManyWithoutAddonInput
  }

  export type addonsUncheckedCreateWithoutBranches_addonsInput = {
    id?: number
    name: string
    addon_categories_id?: number | null
    menu_addons?: menu_addonsUncheckedCreateNestedManyWithoutAddonInput
  }

  export type addonsCreateOrConnectWithoutBranches_addonsInput = {
    where: addonsWhereUniqueInput
    create: XOR<addonsCreateWithoutBranches_addonsInput, addonsUncheckedCreateWithoutBranches_addonsInput>
  }

  export type branchesCreateWithoutBranches_addonsInput = {
    address: string
    companies: companiesCreateNestedOneWithoutBranchesInput
    townships: townshipsCreateNestedOneWithoutBranchesInput
    branches_menucategories_menus?: branches_menucategories_menusCreateNestedManyWithoutBranchesInput
  }

  export type branchesUncheckedCreateWithoutBranches_addonsInput = {
    id?: number
    township_id: number
    company_id: number
    address: string
    branches_menucategories_menus?: branches_menucategories_menusUncheckedCreateNestedManyWithoutBranchesInput
  }

  export type branchesCreateOrConnectWithoutBranches_addonsInput = {
    where: branchesWhereUniqueInput
    create: XOR<branchesCreateWithoutBranches_addonsInput, branchesUncheckedCreateWithoutBranches_addonsInput>
  }

  export type addonsUpsertWithoutBranches_addonsInput = {
    update: XOR<addonsUpdateWithoutBranches_addonsInput, addonsUncheckedUpdateWithoutBranches_addonsInput>
    create: XOR<addonsCreateWithoutBranches_addonsInput, addonsUncheckedCreateWithoutBranches_addonsInput>
  }

  export type addonsUpdateWithoutBranches_addonsInput = {
    name?: StringFieldUpdateOperationsInput | string
    addon_categories_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu_addons?: menu_addonsUpdateManyWithoutAddonNestedInput
  }

  export type addonsUncheckedUpdateWithoutBranches_addonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addon_categories_id?: NullableIntFieldUpdateOperationsInput | number | null
    menu_addons?: menu_addonsUncheckedUpdateManyWithoutAddonNestedInput
  }

  export type branchesUpsertWithoutBranches_addonsInput = {
    update: XOR<branchesUpdateWithoutBranches_addonsInput, branchesUncheckedUpdateWithoutBranches_addonsInput>
    create: XOR<branchesCreateWithoutBranches_addonsInput, branchesUncheckedCreateWithoutBranches_addonsInput>
  }

  export type branchesUpdateWithoutBranches_addonsInput = {
    address?: StringFieldUpdateOperationsInput | string
    companies?: companiesUpdateOneRequiredWithoutBranchesNestedInput
    townships?: townshipsUpdateOneRequiredWithoutBranchesNestedInput
    branches_menucategories_menus?: branches_menucategories_menusUpdateManyWithoutBranchesNestedInput
  }

  export type branchesUncheckedUpdateWithoutBranches_addonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    township_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    branches_menucategories_menus?: branches_menucategories_menusUncheckedUpdateManyWithoutBranchesNestedInput
  }

  export type menusCreateWithoutBranches_menucategories_menusInput = {
    name: string
    price: number
    asset_url?: string | null
    description?: string | null
    menus_addoncats_addons?: menu_addonsCreateNestedManyWithoutMenuInput
  }

  export type menusUncheckedCreateWithoutBranches_menucategories_menusInput = {
    id?: number
    name: string
    price: number
    asset_url?: string | null
    description?: string | null
    menus_addoncats_addons?: menu_addonsUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menusCreateOrConnectWithoutBranches_menucategories_menusInput = {
    where: menusWhereUniqueInput
    create: XOR<menusCreateWithoutBranches_menucategories_menusInput, menusUncheckedCreateWithoutBranches_menucategories_menusInput>
  }

  export type menu_categoriesCreateWithoutBranches_menucategories_menusInput = {
    name: string
  }

  export type menu_categoriesUncheckedCreateWithoutBranches_menucategories_menusInput = {
    id?: number
    name: string
  }

  export type menu_categoriesCreateOrConnectWithoutBranches_menucategories_menusInput = {
    where: menu_categoriesWhereUniqueInput
    create: XOR<menu_categoriesCreateWithoutBranches_menucategories_menusInput, menu_categoriesUncheckedCreateWithoutBranches_menucategories_menusInput>
  }

  export type branchesCreateWithoutBranches_menucategories_menusInput = {
    address: string
    companies: companiesCreateNestedOneWithoutBranchesInput
    townships: townshipsCreateNestedOneWithoutBranchesInput
    branches_addons?: branches_addonsCreateNestedManyWithoutBranchesInput
  }

  export type branchesUncheckedCreateWithoutBranches_menucategories_menusInput = {
    id?: number
    township_id: number
    company_id: number
    address: string
    branches_addons?: branches_addonsUncheckedCreateNestedManyWithoutBranchesInput
  }

  export type branchesCreateOrConnectWithoutBranches_menucategories_menusInput = {
    where: branchesWhereUniqueInput
    create: XOR<branchesCreateWithoutBranches_menucategories_menusInput, branchesUncheckedCreateWithoutBranches_menucategories_menusInput>
  }

  export type menusUpsertWithoutBranches_menucategories_menusInput = {
    update: XOR<menusUpdateWithoutBranches_menucategories_menusInput, menusUncheckedUpdateWithoutBranches_menucategories_menusInput>
    create: XOR<menusCreateWithoutBranches_menucategories_menusInput, menusUncheckedCreateWithoutBranches_menucategories_menusInput>
  }

  export type menusUpdateWithoutBranches_menucategories_menusInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    asset_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    menus_addoncats_addons?: menu_addonsUpdateManyWithoutMenuNestedInput
  }

  export type menusUncheckedUpdateWithoutBranches_menucategories_menusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    asset_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    menus_addoncats_addons?: menu_addonsUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type menu_categoriesUpsertWithoutBranches_menucategories_menusInput = {
    update: XOR<menu_categoriesUpdateWithoutBranches_menucategories_menusInput, menu_categoriesUncheckedUpdateWithoutBranches_menucategories_menusInput>
    create: XOR<menu_categoriesCreateWithoutBranches_menucategories_menusInput, menu_categoriesUncheckedCreateWithoutBranches_menucategories_menusInput>
  }

  export type menu_categoriesUpdateWithoutBranches_menucategories_menusInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type menu_categoriesUncheckedUpdateWithoutBranches_menucategories_menusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type branchesUpsertWithoutBranches_menucategories_menusInput = {
    update: XOR<branchesUpdateWithoutBranches_menucategories_menusInput, branchesUncheckedUpdateWithoutBranches_menucategories_menusInput>
    create: XOR<branchesCreateWithoutBranches_menucategories_menusInput, branchesUncheckedCreateWithoutBranches_menucategories_menusInput>
  }

  export type branchesUpdateWithoutBranches_menucategories_menusInput = {
    address?: StringFieldUpdateOperationsInput | string
    companies?: companiesUpdateOneRequiredWithoutBranchesNestedInput
    townships?: townshipsUpdateOneRequiredWithoutBranchesNestedInput
    branches_addons?: branches_addonsUpdateManyWithoutBranchesNestedInput
  }

  export type branchesUncheckedUpdateWithoutBranches_menucategories_menusInput = {
    id?: IntFieldUpdateOperationsInput | number
    township_id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    branches_addons?: branches_addonsUncheckedUpdateManyWithoutBranchesNestedInput
  }

  export type branchesCreateWithoutCompaniesInput = {
    address: string
    townships: townshipsCreateNestedOneWithoutBranchesInput
    branches_addons?: branches_addonsCreateNestedManyWithoutBranchesInput
    branches_menucategories_menus?: branches_menucategories_menusCreateNestedManyWithoutBranchesInput
  }

  export type branchesUncheckedCreateWithoutCompaniesInput = {
    id?: number
    township_id: number
    address: string
    branches_addons?: branches_addonsUncheckedCreateNestedManyWithoutBranchesInput
    branches_menucategories_menus?: branches_menucategories_menusUncheckedCreateNestedManyWithoutBranchesInput
  }

  export type branchesCreateOrConnectWithoutCompaniesInput = {
    where: branchesWhereUniqueInput
    create: XOR<branchesCreateWithoutCompaniesInput, branchesUncheckedCreateWithoutCompaniesInput>
  }

  export type branchesCreateManyCompaniesInputEnvelope = {
    data: Enumerable<branchesCreateManyCompaniesInput>
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutCompaniesInput = {
    name: string
    email: string
    password: string
    role: Role
  }

  export type usersUncheckedCreateWithoutCompaniesInput = {
    id?: number
    name: string
    email: string
    password: string
    role: Role
  }

  export type usersCreateOrConnectWithoutCompaniesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCompaniesInput, usersUncheckedCreateWithoutCompaniesInput>
  }

  export type usersCreateManyCompaniesInputEnvelope = {
    data: Enumerable<usersCreateManyCompaniesInput>
    skipDuplicates?: boolean
  }

  export type branchesUpsertWithWhereUniqueWithoutCompaniesInput = {
    where: branchesWhereUniqueInput
    update: XOR<branchesUpdateWithoutCompaniesInput, branchesUncheckedUpdateWithoutCompaniesInput>
    create: XOR<branchesCreateWithoutCompaniesInput, branchesUncheckedCreateWithoutCompaniesInput>
  }

  export type branchesUpdateWithWhereUniqueWithoutCompaniesInput = {
    where: branchesWhereUniqueInput
    data: XOR<branchesUpdateWithoutCompaniesInput, branchesUncheckedUpdateWithoutCompaniesInput>
  }

  export type branchesUpdateManyWithWhereWithoutCompaniesInput = {
    where: branchesScalarWhereInput
    data: XOR<branchesUpdateManyMutationInput, branchesUncheckedUpdateManyWithoutBranchesInput>
  }

  export type branchesScalarWhereInput = {
    AND?: Enumerable<branchesScalarWhereInput>
    OR?: Enumerable<branchesScalarWhereInput>
    NOT?: Enumerable<branchesScalarWhereInput>
    id?: IntFilter | number
    township_id?: IntFilter | number
    company_id?: IntFilter | number
    address?: StringFilter | string
  }

  export type usersUpsertWithWhereUniqueWithoutCompaniesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutCompaniesInput, usersUncheckedUpdateWithoutCompaniesInput>
    create: XOR<usersCreateWithoutCompaniesInput, usersUncheckedCreateWithoutCompaniesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutCompaniesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutCompaniesInput, usersUncheckedUpdateWithoutCompaniesInput>
  }

  export type usersUpdateManyWithWhereWithoutCompaniesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutUsersInput>
  }

  export type usersScalarWhereInput = {
    AND?: Enumerable<usersScalarWhereInput>
    OR?: Enumerable<usersScalarWhereInput>
    NOT?: Enumerable<usersScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    company_id?: IntFilter | number
    role?: EnumRoleFilter | Role
  }

  export type branches_menucategories_menusCreateWithoutMenu_categoriesInput = {
    is_available?: boolean
    menus?: menusCreateNestedOneWithoutBranches_menucategories_menusInput
    branches: branchesCreateNestedOneWithoutBranches_menucategories_menusInput
  }

  export type branches_menucategories_menusUncheckedCreateWithoutMenu_categoriesInput = {
    id?: number
    menu_id?: number | null
    branch_id: number
    is_available?: boolean
  }

  export type branches_menucategories_menusCreateOrConnectWithoutMenu_categoriesInput = {
    where: branches_menucategories_menusWhereUniqueInput
    create: XOR<branches_menucategories_menusCreateWithoutMenu_categoriesInput, branches_menucategories_menusUncheckedCreateWithoutMenu_categoriesInput>
  }

  export type branches_menucategories_menusCreateManyMenu_categoriesInputEnvelope = {
    data: Enumerable<branches_menucategories_menusCreateManyMenu_categoriesInput>
    skipDuplicates?: boolean
  }

  export type branches_menucategories_menusUpsertWithWhereUniqueWithoutMenu_categoriesInput = {
    where: branches_menucategories_menusWhereUniqueInput
    update: XOR<branches_menucategories_menusUpdateWithoutMenu_categoriesInput, branches_menucategories_menusUncheckedUpdateWithoutMenu_categoriesInput>
    create: XOR<branches_menucategories_menusCreateWithoutMenu_categoriesInput, branches_menucategories_menusUncheckedCreateWithoutMenu_categoriesInput>
  }

  export type branches_menucategories_menusUpdateWithWhereUniqueWithoutMenu_categoriesInput = {
    where: branches_menucategories_menusWhereUniqueInput
    data: XOR<branches_menucategories_menusUpdateWithoutMenu_categoriesInput, branches_menucategories_menusUncheckedUpdateWithoutMenu_categoriesInput>
  }

  export type branches_menucategories_menusUpdateManyWithWhereWithoutMenu_categoriesInput = {
    where: branches_menucategories_menusScalarWhereInput
    data: XOR<branches_menucategories_menusUpdateManyMutationInput, branches_menucategories_menusUncheckedUpdateManyWithoutBranches_menucategories_menusInput>
  }

  export type branches_menucategories_menusCreateWithoutMenusInput = {
    is_available?: boolean
    menu_categories: menu_categoriesCreateNestedOneWithoutBranches_menucategories_menusInput
    branches: branchesCreateNestedOneWithoutBranches_menucategories_menusInput
  }

  export type branches_menucategories_menusUncheckedCreateWithoutMenusInput = {
    id?: number
    branch_id: number
    menucategory_id: number
    is_available?: boolean
  }

  export type branches_menucategories_menusCreateOrConnectWithoutMenusInput = {
    where: branches_menucategories_menusWhereUniqueInput
    create: XOR<branches_menucategories_menusCreateWithoutMenusInput, branches_menucategories_menusUncheckedCreateWithoutMenusInput>
  }

  export type branches_menucategories_menusCreateManyMenusInputEnvelope = {
    data: Enumerable<branches_menucategories_menusCreateManyMenusInput>
    skipDuplicates?: boolean
  }

  export type menu_addonsCreateWithoutMenuInput = {
    price: number
    addon: addonsCreateNestedOneWithoutMenu_addonsInput
    addon_categories?: addon_categoriesCreateNestedManyWithoutMenu_addonsInput
  }

  export type menu_addonsUncheckedCreateWithoutMenuInput = {
    id?: number
    addon_id: number
    price: number
    addon_categories?: addon_categoriesUncheckedCreateNestedManyWithoutMenu_addonsInput
  }

  export type menu_addonsCreateOrConnectWithoutMenuInput = {
    where: menu_addonsWhereUniqueInput
    create: XOR<menu_addonsCreateWithoutMenuInput, menu_addonsUncheckedCreateWithoutMenuInput>
  }

  export type menu_addonsCreateManyMenuInputEnvelope = {
    data: Enumerable<menu_addonsCreateManyMenuInput>
    skipDuplicates?: boolean
  }

  export type branches_menucategories_menusUpsertWithWhereUniqueWithoutMenusInput = {
    where: branches_menucategories_menusWhereUniqueInput
    update: XOR<branches_menucategories_menusUpdateWithoutMenusInput, branches_menucategories_menusUncheckedUpdateWithoutMenusInput>
    create: XOR<branches_menucategories_menusCreateWithoutMenusInput, branches_menucategories_menusUncheckedCreateWithoutMenusInput>
  }

  export type branches_menucategories_menusUpdateWithWhereUniqueWithoutMenusInput = {
    where: branches_menucategories_menusWhereUniqueInput
    data: XOR<branches_menucategories_menusUpdateWithoutMenusInput, branches_menucategories_menusUncheckedUpdateWithoutMenusInput>
  }

  export type branches_menucategories_menusUpdateManyWithWhereWithoutMenusInput = {
    where: branches_menucategories_menusScalarWhereInput
    data: XOR<branches_menucategories_menusUpdateManyMutationInput, branches_menucategories_menusUncheckedUpdateManyWithoutBranches_menucategories_menusInput>
  }

  export type menu_addonsUpsertWithWhereUniqueWithoutMenuInput = {
    where: menu_addonsWhereUniqueInput
    update: XOR<menu_addonsUpdateWithoutMenuInput, menu_addonsUncheckedUpdateWithoutMenuInput>
    create: XOR<menu_addonsCreateWithoutMenuInput, menu_addonsUncheckedCreateWithoutMenuInput>
  }

  export type menu_addonsUpdateWithWhereUniqueWithoutMenuInput = {
    where: menu_addonsWhereUniqueInput
    data: XOR<menu_addonsUpdateWithoutMenuInput, menu_addonsUncheckedUpdateWithoutMenuInput>
  }

  export type menu_addonsUpdateManyWithWhereWithoutMenuInput = {
    where: menu_addonsScalarWhereInput
    data: XOR<menu_addonsUpdateManyMutationInput, menu_addonsUncheckedUpdateManyWithoutMenus_addoncats_addonsInput>
  }

  export type menusCreateWithoutMenus_addoncats_addonsInput = {
    name: string
    price: number
    asset_url?: string | null
    description?: string | null
    branches_menucategories_menus?: branches_menucategories_menusCreateNestedManyWithoutMenusInput
  }

  export type menusUncheckedCreateWithoutMenus_addoncats_addonsInput = {
    id?: number
    name: string
    price: number
    asset_url?: string | null
    description?: string | null
    branches_menucategories_menus?: branches_menucategories_menusUncheckedCreateNestedManyWithoutMenusInput
  }

  export type menusCreateOrConnectWithoutMenus_addoncats_addonsInput = {
    where: menusWhereUniqueInput
    create: XOR<menusCreateWithoutMenus_addoncats_addonsInput, menusUncheckedCreateWithoutMenus_addoncats_addonsInput>
  }

  export type addonsCreateWithoutMenu_addonsInput = {
    name: string
    addon_categories_id?: number | null
    branches_addons?: branches_addonsCreateNestedManyWithoutAddonsInput
  }

  export type addonsUncheckedCreateWithoutMenu_addonsInput = {
    id?: number
    name: string
    addon_categories_id?: number | null
    branches_addons?: branches_addonsUncheckedCreateNestedManyWithoutAddonsInput
  }

  export type addonsCreateOrConnectWithoutMenu_addonsInput = {
    where: addonsWhereUniqueInput
    create: XOR<addonsCreateWithoutMenu_addonsInput, addonsUncheckedCreateWithoutMenu_addonsInput>
  }

  export type addon_categoriesCreateWithoutMenu_addonsInput = {
    name: string
    is_required?: boolean
  }

  export type addon_categoriesUncheckedCreateWithoutMenu_addonsInput = {
    id?: number
    name: string
    is_required?: boolean
  }

  export type addon_categoriesCreateOrConnectWithoutMenu_addonsInput = {
    where: addon_categoriesWhereUniqueInput
    create: XOR<addon_categoriesCreateWithoutMenu_addonsInput, addon_categoriesUncheckedCreateWithoutMenu_addonsInput>
  }

  export type menusUpsertWithoutMenus_addoncats_addonsInput = {
    update: XOR<menusUpdateWithoutMenus_addoncats_addonsInput, menusUncheckedUpdateWithoutMenus_addoncats_addonsInput>
    create: XOR<menusCreateWithoutMenus_addoncats_addonsInput, menusUncheckedCreateWithoutMenus_addoncats_addonsInput>
  }

  export type menusUpdateWithoutMenus_addoncats_addonsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    asset_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    branches_menucategories_menus?: branches_menucategories_menusUpdateManyWithoutMenusNestedInput
  }

  export type menusUncheckedUpdateWithoutMenus_addoncats_addonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    asset_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    branches_menucategories_menus?: branches_menucategories_menusUncheckedUpdateManyWithoutMenusNestedInput
  }

  export type addonsUpsertWithoutMenu_addonsInput = {
    update: XOR<addonsUpdateWithoutMenu_addonsInput, addonsUncheckedUpdateWithoutMenu_addonsInput>
    create: XOR<addonsCreateWithoutMenu_addonsInput, addonsUncheckedCreateWithoutMenu_addonsInput>
  }

  export type addonsUpdateWithoutMenu_addonsInput = {
    name?: StringFieldUpdateOperationsInput | string
    addon_categories_id?: NullableIntFieldUpdateOperationsInput | number | null
    branches_addons?: branches_addonsUpdateManyWithoutAddonsNestedInput
  }

  export type addonsUncheckedUpdateWithoutMenu_addonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    addon_categories_id?: NullableIntFieldUpdateOperationsInput | number | null
    branches_addons?: branches_addonsUncheckedUpdateManyWithoutAddonsNestedInput
  }

  export type addon_categoriesUpsertWithWhereUniqueWithoutMenu_addonsInput = {
    where: addon_categoriesWhereUniqueInput
    update: XOR<addon_categoriesUpdateWithoutMenu_addonsInput, addon_categoriesUncheckedUpdateWithoutMenu_addonsInput>
    create: XOR<addon_categoriesCreateWithoutMenu_addonsInput, addon_categoriesUncheckedCreateWithoutMenu_addonsInput>
  }

  export type addon_categoriesUpdateWithWhereUniqueWithoutMenu_addonsInput = {
    where: addon_categoriesWhereUniqueInput
    data: XOR<addon_categoriesUpdateWithoutMenu_addonsInput, addon_categoriesUncheckedUpdateWithoutMenu_addonsInput>
  }

  export type addon_categoriesUpdateManyWithWhereWithoutMenu_addonsInput = {
    where: addon_categoriesScalarWhereInput
    data: XOR<addon_categoriesUpdateManyMutationInput, addon_categoriesUncheckedUpdateManyWithoutAddon_categoriesInput>
  }

  export type addon_categoriesScalarWhereInput = {
    AND?: Enumerable<addon_categoriesScalarWhereInput>
    OR?: Enumerable<addon_categoriesScalarWhereInput>
    NOT?: Enumerable<addon_categoriesScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    is_required?: BoolFilter | boolean
  }

  export type branchesCreateWithoutTownshipsInput = {
    address: string
    companies: companiesCreateNestedOneWithoutBranchesInput
    branches_addons?: branches_addonsCreateNestedManyWithoutBranchesInput
    branches_menucategories_menus?: branches_menucategories_menusCreateNestedManyWithoutBranchesInput
  }

  export type branchesUncheckedCreateWithoutTownshipsInput = {
    id?: number
    company_id: number
    address: string
    branches_addons?: branches_addonsUncheckedCreateNestedManyWithoutBranchesInput
    branches_menucategories_menus?: branches_menucategories_menusUncheckedCreateNestedManyWithoutBranchesInput
  }

  export type branchesCreateOrConnectWithoutTownshipsInput = {
    where: branchesWhereUniqueInput
    create: XOR<branchesCreateWithoutTownshipsInput, branchesUncheckedCreateWithoutTownshipsInput>
  }

  export type branchesCreateManyTownshipsInputEnvelope = {
    data: Enumerable<branchesCreateManyTownshipsInput>
    skipDuplicates?: boolean
  }

  export type branchesUpsertWithWhereUniqueWithoutTownshipsInput = {
    where: branchesWhereUniqueInput
    update: XOR<branchesUpdateWithoutTownshipsInput, branchesUncheckedUpdateWithoutTownshipsInput>
    create: XOR<branchesCreateWithoutTownshipsInput, branchesUncheckedCreateWithoutTownshipsInput>
  }

  export type branchesUpdateWithWhereUniqueWithoutTownshipsInput = {
    where: branchesWhereUniqueInput
    data: XOR<branchesUpdateWithoutTownshipsInput, branchesUncheckedUpdateWithoutTownshipsInput>
  }

  export type branchesUpdateManyWithWhereWithoutTownshipsInput = {
    where: branchesScalarWhereInput
    data: XOR<branchesUpdateManyMutationInput, branchesUncheckedUpdateManyWithoutBranchesInput>
  }

  export type companiesCreateWithoutUsersInput = {
    name: string
    branches?: branchesCreateNestedManyWithoutCompaniesInput
  }

  export type companiesUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    branches?: branchesUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type companiesCreateOrConnectWithoutUsersInput = {
    where: companiesWhereUniqueInput
    create: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput>
  }

  export type companiesUpsertWithoutUsersInput = {
    update: XOR<companiesUpdateWithoutUsersInput, companiesUncheckedUpdateWithoutUsersInput>
    create: XOR<companiesCreateWithoutUsersInput, companiesUncheckedCreateWithoutUsersInput>
  }

  export type companiesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    branches?: branchesUpdateManyWithoutCompaniesNestedInput
  }

  export type companiesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    branches?: branchesUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type menu_addonsUpdateWithoutAddon_categoriesInput = {
    price?: IntFieldUpdateOperationsInput | number
    menu?: menusUpdateOneRequiredWithoutMenus_addoncats_addonsNestedInput
    addon?: addonsUpdateOneRequiredWithoutMenu_addonsNestedInput
  }

  export type menu_addonsUncheckedUpdateWithoutAddon_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_id?: IntFieldUpdateOperationsInput | number
    addon_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type menu_addonsUncheckedUpdateManyWithoutMenu_addonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_id?: IntFieldUpdateOperationsInput | number
    addon_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type branches_addonsCreateManyAddonsInput = {
    id?: number
    branch_id: number
    is_available?: boolean | null
  }

  export type menu_addonsCreateManyAddonInput = {
    id?: number
    menu_id: number
    price: number
  }

  export type branches_addonsUpdateWithoutAddonsInput = {
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    branches?: branchesUpdateOneRequiredWithoutBranches_addonsNestedInput
  }

  export type branches_addonsUncheckedUpdateWithoutAddonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type branches_addonsUncheckedUpdateManyWithoutBranches_addonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type menu_addonsUpdateWithoutAddonInput = {
    price?: IntFieldUpdateOperationsInput | number
    menu?: menusUpdateOneRequiredWithoutMenus_addoncats_addonsNestedInput
    addon_categories?: addon_categoriesUpdateManyWithoutMenu_addonsNestedInput
  }

  export type menu_addonsUncheckedUpdateWithoutAddonInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    addon_categories?: addon_categoriesUncheckedUpdateManyWithoutMenu_addonsNestedInput
  }

  export type branches_addonsCreateManyBranchesInput = {
    id?: number
    addon_id: number
    is_available?: boolean | null
  }

  export type branches_menucategories_menusCreateManyBranchesInput = {
    id?: number
    menu_id?: number | null
    menucategory_id: number
    is_available?: boolean
  }

  export type branches_addonsUpdateWithoutBranchesInput = {
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    addons?: addonsUpdateOneRequiredWithoutBranches_addonsNestedInput
  }

  export type branches_addonsUncheckedUpdateWithoutBranchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    addon_id?: IntFieldUpdateOperationsInput | number
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type branches_menucategories_menusUpdateWithoutBranchesInput = {
    is_available?: BoolFieldUpdateOperationsInput | boolean
    menus?: menusUpdateOneWithoutBranches_menucategories_menusNestedInput
    menu_categories?: menu_categoriesUpdateOneRequiredWithoutBranches_menucategories_menusNestedInput
  }

  export type branches_menucategories_menusUncheckedUpdateWithoutBranchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_id?: NullableIntFieldUpdateOperationsInput | number | null
    menucategory_id?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type branches_menucategories_menusUncheckedUpdateManyWithoutBranches_menucategories_menusInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_id?: NullableIntFieldUpdateOperationsInput | number | null
    menucategory_id?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type branchesCreateManyCompaniesInput = {
    id?: number
    township_id: number
    address: string
  }

  export type usersCreateManyCompaniesInput = {
    id?: number
    name: string
    email: string
    password: string
    role: Role
  }

  export type branchesUpdateWithoutCompaniesInput = {
    address?: StringFieldUpdateOperationsInput | string
    townships?: townshipsUpdateOneRequiredWithoutBranchesNestedInput
    branches_addons?: branches_addonsUpdateManyWithoutBranchesNestedInput
    branches_menucategories_menus?: branches_menucategories_menusUpdateManyWithoutBranchesNestedInput
  }

  export type branchesUncheckedUpdateWithoutCompaniesInput = {
    id?: IntFieldUpdateOperationsInput | number
    township_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    branches_addons?: branches_addonsUncheckedUpdateManyWithoutBranchesNestedInput
    branches_menucategories_menus?: branches_menucategories_menusUncheckedUpdateManyWithoutBranchesNestedInput
  }

  export type branchesUncheckedUpdateManyWithoutBranchesInput = {
    id?: IntFieldUpdateOperationsInput | number
    township_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
  }

  export type usersUpdateWithoutCompaniesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type usersUncheckedUpdateWithoutCompaniesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type usersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | Role
  }

  export type branches_menucategories_menusCreateManyMenu_categoriesInput = {
    id?: number
    menu_id?: number | null
    branch_id: number
    is_available?: boolean
  }

  export type branches_menucategories_menusUpdateWithoutMenu_categoriesInput = {
    is_available?: BoolFieldUpdateOperationsInput | boolean
    menus?: menusUpdateOneWithoutBranches_menucategories_menusNestedInput
    branches?: branchesUpdateOneRequiredWithoutBranches_menucategories_menusNestedInput
  }

  export type branches_menucategories_menusUncheckedUpdateWithoutMenu_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    menu_id?: NullableIntFieldUpdateOperationsInput | number | null
    branch_id?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type branches_menucategories_menusCreateManyMenusInput = {
    id?: number
    branch_id: number
    menucategory_id: number
    is_available?: boolean
  }

  export type menu_addonsCreateManyMenuInput = {
    id?: number
    addon_id: number
    price: number
  }

  export type branches_menucategories_menusUpdateWithoutMenusInput = {
    is_available?: BoolFieldUpdateOperationsInput | boolean
    menu_categories?: menu_categoriesUpdateOneRequiredWithoutBranches_menucategories_menusNestedInput
    branches?: branchesUpdateOneRequiredWithoutBranches_menucategories_menusNestedInput
  }

  export type branches_menucategories_menusUncheckedUpdateWithoutMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    branch_id?: IntFieldUpdateOperationsInput | number
    menucategory_id?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type menu_addonsUpdateWithoutMenuInput = {
    price?: IntFieldUpdateOperationsInput | number
    addon?: addonsUpdateOneRequiredWithoutMenu_addonsNestedInput
    addon_categories?: addon_categoriesUpdateManyWithoutMenu_addonsNestedInput
  }

  export type menu_addonsUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    addon_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    addon_categories?: addon_categoriesUncheckedUpdateManyWithoutMenu_addonsNestedInput
  }

  export type menu_addonsUncheckedUpdateManyWithoutMenus_addoncats_addonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    addon_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
  }

  export type addon_categoriesUpdateWithoutMenu_addonsInput = {
    name?: StringFieldUpdateOperationsInput | string
    is_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type addon_categoriesUncheckedUpdateWithoutMenu_addonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type addon_categoriesUncheckedUpdateManyWithoutAddon_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    is_required?: BoolFieldUpdateOperationsInput | boolean
  }

  export type branchesCreateManyTownshipsInput = {
    id?: number
    company_id: number
    address: string
  }

  export type branchesUpdateWithoutTownshipsInput = {
    address?: StringFieldUpdateOperationsInput | string
    companies?: companiesUpdateOneRequiredWithoutBranchesNestedInput
    branches_addons?: branches_addonsUpdateManyWithoutBranchesNestedInput
    branches_menucategories_menus?: branches_menucategories_menusUpdateManyWithoutBranchesNestedInput
  }

  export type branchesUncheckedUpdateWithoutTownshipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    company_id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    branches_addons?: branches_addonsUncheckedUpdateManyWithoutBranchesNestedInput
    branches_menucategories_menus?: branches_menucategories_menusUncheckedUpdateManyWithoutBranchesNestedInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}