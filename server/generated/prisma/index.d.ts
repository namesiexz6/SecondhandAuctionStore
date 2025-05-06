
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ImageProduct
 * 
 */
export type ImageProduct = $Result.DefaultSelection<Prisma.$ImageProductPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model Auctioneer_Board
 * 
 */
export type Auctioneer_Board = $Result.DefaultSelection<Prisma.$Auctioneer_BoardPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model ProductOnOrder
 * 
 */
export type ProductOnOrder = $Result.DefaultSelection<Prisma.$ProductOnOrderPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imageProduct`: Exposes CRUD operations for the **ImageProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageProducts
    * const imageProducts = await prisma.imageProduct.findMany()
    * ```
    */
  get imageProduct(): Prisma.ImageProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auctioneer_Board`: Exposes CRUD operations for the **Auctioneer_Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auctioneer_Boards
    * const auctioneer_Boards = await prisma.auctioneer_Board.findMany()
    * ```
    */
  get auctioneer_Board(): Prisma.Auctioneer_BoardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productOnOrder`: Exposes CRUD operations for the **ProductOnOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductOnOrders
    * const productOnOrders = await prisma.productOnOrder.findMany()
    * ```
    */
  get productOnOrder(): Prisma.ProductOnOrderDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Category: 'Category',
    Product: 'Product',
    ImageProduct: 'ImageProduct',
    Cart: 'Cart',
    Auctioneer_Board: 'Auctioneer_Board',
    Order: 'Order',
    ProductOnOrder: 'ProductOnOrder'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "category" | "product" | "imageProduct" | "cart" | "auctioneer_Board" | "order" | "productOnOrder"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ImageProduct: {
        payload: Prisma.$ImageProductPayload<ExtArgs>
        fields: Prisma.ImageProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageProductPayload>
          }
          findFirst: {
            args: Prisma.ImageProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageProductPayload>
          }
          findMany: {
            args: Prisma.ImageProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageProductPayload>[]
          }
          create: {
            args: Prisma.ImageProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageProductPayload>
          }
          createMany: {
            args: Prisma.ImageProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImageProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageProductPayload>
          }
          update: {
            args: Prisma.ImageProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageProductPayload>
          }
          deleteMany: {
            args: Prisma.ImageProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImageProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageProductPayload>
          }
          aggregate: {
            args: Prisma.ImageProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImageProduct>
          }
          groupBy: {
            args: Prisma.ImageProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageProductCountArgs<ExtArgs>
            result: $Utils.Optional<ImageProductCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      Auctioneer_Board: {
        payload: Prisma.$Auctioneer_BoardPayload<ExtArgs>
        fields: Prisma.Auctioneer_BoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Auctioneer_BoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auctioneer_BoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Auctioneer_BoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auctioneer_BoardPayload>
          }
          findFirst: {
            args: Prisma.Auctioneer_BoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auctioneer_BoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Auctioneer_BoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auctioneer_BoardPayload>
          }
          findMany: {
            args: Prisma.Auctioneer_BoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auctioneer_BoardPayload>[]
          }
          create: {
            args: Prisma.Auctioneer_BoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auctioneer_BoardPayload>
          }
          createMany: {
            args: Prisma.Auctioneer_BoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Auctioneer_BoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auctioneer_BoardPayload>
          }
          update: {
            args: Prisma.Auctioneer_BoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auctioneer_BoardPayload>
          }
          deleteMany: {
            args: Prisma.Auctioneer_BoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Auctioneer_BoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Auctioneer_BoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Auctioneer_BoardPayload>
          }
          aggregate: {
            args: Prisma.Auctioneer_BoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuctioneer_Board>
          }
          groupBy: {
            args: Prisma.Auctioneer_BoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<Auctioneer_BoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.Auctioneer_BoardCountArgs<ExtArgs>
            result: $Utils.Optional<Auctioneer_BoardCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      ProductOnOrder: {
        payload: Prisma.$ProductOnOrderPayload<ExtArgs>
        fields: Prisma.ProductOnOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductOnOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOnOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductOnOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOnOrderPayload>
          }
          findFirst: {
            args: Prisma.ProductOnOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOnOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductOnOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOnOrderPayload>
          }
          findMany: {
            args: Prisma.ProductOnOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOnOrderPayload>[]
          }
          create: {
            args: Prisma.ProductOnOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOnOrderPayload>
          }
          createMany: {
            args: Prisma.ProductOnOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductOnOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOnOrderPayload>
          }
          update: {
            args: Prisma.ProductOnOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOnOrderPayload>
          }
          deleteMany: {
            args: Prisma.ProductOnOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductOnOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductOnOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductOnOrderPayload>
          }
          aggregate: {
            args: Prisma.ProductOnOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductOnOrder>
          }
          groupBy: {
            args: Prisma.ProductOnOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductOnOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductOnOrderCountArgs<ExtArgs>
            result: $Utils.Optional<ProductOnOrderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    category?: CategoryOmit
    product?: ProductOmit
    imageProduct?: ImageProductOmit
    cart?: CartOmit
    auctioneer_Board?: Auctioneer_BoardOmit
    order?: OrderOmit
    productOnOrder?: ProductOnOrderOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    carts: number
    auctioneerBoards: number
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | UserCountOutputTypeCountCartsArgs
    auctioneerBoards?: boolean | UserCountOutputTypeCountAuctioneerBoardsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuctioneerBoardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Auctioneer_BoardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    images: number
    carts: number
    auctioneerBoards: number
    productOnOrders: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProductCountOutputTypeCountImagesArgs
    carts?: boolean | ProductCountOutputTypeCountCartsArgs
    auctioneerBoards?: boolean | ProductCountOutputTypeCountAuctioneerBoardsArgs
    productOnOrders?: boolean | ProductCountOutputTypeCountProductOnOrdersArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageProductWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountAuctioneerBoardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Auctioneer_BoardWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductOnOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOnOrderWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    products: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | OrderCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOnOrderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    role: number | null
    type_account: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    role: number | null
    type_account: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    picture: string | null
    role: number | null
    enabled: boolean | null
    address: string | null
    phone: string | null
    type_account: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    picture: string | null
    role: number | null
    enabled: boolean | null
    address: string | null
    phone: string | null
    type_account: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    picture: number
    role: number
    enabled: number
    address: number
    phone: number
    type_account: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    role?: true
    type_account?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    role?: true
    type_account?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    picture?: true
    role?: true
    enabled?: true
    address?: true
    phone?: true
    type_account?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    picture?: true
    role?: true
    enabled?: true
    address?: true
    phone?: true
    type_account?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    picture?: true
    role?: true
    enabled?: true
    address?: true
    phone?: true
    type_account?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string | null
    name: string | null
    picture: string | null
    role: number
    enabled: boolean
    address: string | null
    phone: string | null
    type_account: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    picture?: boolean
    role?: boolean
    enabled?: boolean
    address?: boolean
    phone?: boolean
    type_account?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    carts?: boolean | User$cartsArgs<ExtArgs>
    auctioneerBoards?: boolean | User$auctioneerBoardsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    picture?: boolean
    role?: boolean
    enabled?: boolean
    address?: boolean
    phone?: boolean
    type_account?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "picture" | "role" | "enabled" | "address" | "phone" | "type_account" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | User$cartsArgs<ExtArgs>
    auctioneerBoards?: boolean | User$auctioneerBoardsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      carts: Prisma.$CartPayload<ExtArgs>[]
      auctioneerBoards: Prisma.$Auctioneer_BoardPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string | null
      name: string | null
      picture: string | null
      role: number
      enabled: boolean
      address: string | null
      phone: string | null
      type_account: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carts<T extends User$cartsArgs<ExtArgs> = {}>(args?: Subset<T, User$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auctioneerBoards<T extends User$auctioneerBoardsArgs<ExtArgs> = {}>(args?: Subset<T, User$auctioneerBoardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Auctioneer_BoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Int'>
    readonly enabled: FieldRef<"User", 'Boolean'>
    readonly address: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly type_account: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.carts
   */
  export type User$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    cursor?: CartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * User.auctioneerBoards
   */
  export type User$auctioneerBoardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auctioneer_Board
     */
    select?: Auctioneer_BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auctioneer_Board
     */
    omit?: Auctioneer_BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auctioneer_BoardInclude<ExtArgs> | null
    where?: Auctioneer_BoardWhereInput
    orderBy?: Auctioneer_BoardOrderByWithRelationInput | Auctioneer_BoardOrderByWithRelationInput[]
    cursor?: Auctioneer_BoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Auctioneer_BoardScalarFieldEnum | Auctioneer_BoardScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    condition: number | null
    starting_price: number | null
    min_bid_price: number | null
    category_id: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    condition: number | null
    starting_price: number | null
    min_bid_price: number | null
    category_id: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    size: string | null
    description: string | null
    condition: number | null
    description_condition: string | null
    starting_price: number | null
    min_bid_price: number | null
    category_id: number | null
    status: boolean | null
    start_date: Date | null
    end_date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    size: string | null
    description: string | null
    condition: number | null
    description_condition: string | null
    starting_price: number | null
    min_bid_price: number | null
    category_id: number | null
    status: boolean | null
    start_date: Date | null
    end_date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    size: number
    description: number
    condition: number
    description_condition: number
    starting_price: number
    min_bid_price: number
    category_id: number
    status: number
    start_date: number
    end_date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    condition?: true
    starting_price?: true
    min_bid_price?: true
    category_id?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    condition?: true
    starting_price?: true
    min_bid_price?: true
    category_id?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    size?: true
    description?: true
    condition?: true
    description_condition?: true
    starting_price?: true
    min_bid_price?: true
    category_id?: true
    status?: true
    start_date?: true
    end_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    size?: true
    description?: true
    condition?: true
    description_condition?: true
    starting_price?: true
    min_bid_price?: true
    category_id?: true
    status?: true
    start_date?: true
    end_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    size?: true
    description?: true
    condition?: true
    description_condition?: true
    starting_price?: true
    min_bid_price?: true
    category_id?: true
    status?: true
    start_date?: true
    end_date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    size: string
    description: string
    condition: number
    description_condition: string | null
    starting_price: number
    min_bid_price: number
    category_id: number
    status: boolean
    start_date: Date
    end_date: Date
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    description?: boolean
    condition?: boolean
    description_condition?: boolean
    starting_price?: boolean
    min_bid_price?: boolean
    category_id?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    carts?: boolean | Product$cartsArgs<ExtArgs>
    auctioneerBoards?: boolean | Product$auctioneerBoardsArgs<ExtArgs>
    productOnOrders?: boolean | Product$productOnOrdersArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    size?: boolean
    description?: boolean
    condition?: boolean
    description_condition?: boolean
    starting_price?: boolean
    min_bid_price?: boolean
    category_id?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "size" | "description" | "condition" | "description_condition" | "starting_price" | "min_bid_price" | "category_id" | "status" | "start_date" | "end_date" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    carts?: boolean | Product$cartsArgs<ExtArgs>
    auctioneerBoards?: boolean | Product$auctioneerBoardsArgs<ExtArgs>
    productOnOrders?: boolean | Product$productOnOrdersArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      images: Prisma.$ImageProductPayload<ExtArgs>[]
      carts: Prisma.$CartPayload<ExtArgs>[]
      auctioneerBoards: Prisma.$Auctioneer_BoardPayload<ExtArgs>[]
      productOnOrders: Prisma.$ProductOnOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      size: string
      description: string
      condition: number
      description_condition: string | null
      starting_price: number
      min_bid_price: number
      category_id: number
      status: boolean
      start_date: Date
      end_date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Product$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carts<T extends Product$cartsArgs<ExtArgs> = {}>(args?: Subset<T, Product$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auctioneerBoards<T extends Product$auctioneerBoardsArgs<ExtArgs> = {}>(args?: Subset<T, Product$auctioneerBoardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Auctioneer_BoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productOnOrders<T extends Product$productOnOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Product$productOnOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOnOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly size: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly condition: FieldRef<"Product", 'Float'>
    readonly description_condition: FieldRef<"Product", 'String'>
    readonly starting_price: FieldRef<"Product", 'Float'>
    readonly min_bid_price: FieldRef<"Product", 'Float'>
    readonly category_id: FieldRef<"Product", 'Int'>
    readonly status: FieldRef<"Product", 'Boolean'>
    readonly start_date: FieldRef<"Product", 'DateTime'>
    readonly end_date: FieldRef<"Product", 'DateTime'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.images
   */
  export type Product$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageProduct
     */
    select?: ImageProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageProduct
     */
    omit?: ImageProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageProductInclude<ExtArgs> | null
    where?: ImageProductWhereInput
    orderBy?: ImageProductOrderByWithRelationInput | ImageProductOrderByWithRelationInput[]
    cursor?: ImageProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageProductScalarFieldEnum | ImageProductScalarFieldEnum[]
  }

  /**
   * Product.carts
   */
  export type Product$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    cursor?: CartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Product.auctioneerBoards
   */
  export type Product$auctioneerBoardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auctioneer_Board
     */
    select?: Auctioneer_BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auctioneer_Board
     */
    omit?: Auctioneer_BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auctioneer_BoardInclude<ExtArgs> | null
    where?: Auctioneer_BoardWhereInput
    orderBy?: Auctioneer_BoardOrderByWithRelationInput | Auctioneer_BoardOrderByWithRelationInput[]
    cursor?: Auctioneer_BoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Auctioneer_BoardScalarFieldEnum | Auctioneer_BoardScalarFieldEnum[]
  }

  /**
   * Product.productOnOrders
   */
  export type Product$productOnOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnOrder
     */
    select?: ProductOnOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOnOrder
     */
    omit?: ProductOnOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOnOrderInclude<ExtArgs> | null
    where?: ProductOnOrderWhereInput
    orderBy?: ProductOnOrderOrderByWithRelationInput | ProductOnOrderOrderByWithRelationInput[]
    cursor?: ProductOnOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductOnOrderScalarFieldEnum | ProductOnOrderScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ImageProduct
   */

  export type AggregateImageProduct = {
    _count: ImageProductCountAggregateOutputType | null
    _avg: ImageProductAvgAggregateOutputType | null
    _sum: ImageProductSumAggregateOutputType | null
    _min: ImageProductMinAggregateOutputType | null
    _max: ImageProductMaxAggregateOutputType | null
  }

  export type ImageProductAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type ImageProductSumAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type ImageProductMinAggregateOutputType = {
    id: number | null
    asset_id: string | null
    public_id: string | null
    url: string | null
    secure_url: string | null
    product_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageProductMaxAggregateOutputType = {
    id: number | null
    asset_id: string | null
    public_id: string | null
    url: string | null
    secure_url: string | null
    product_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageProductCountAggregateOutputType = {
    id: number
    asset_id: number
    public_id: number
    url: number
    secure_url: number
    product_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageProductAvgAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type ImageProductSumAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type ImageProductMinAggregateInputType = {
    id?: true
    asset_id?: true
    public_id?: true
    url?: true
    secure_url?: true
    product_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageProductMaxAggregateInputType = {
    id?: true
    asset_id?: true
    public_id?: true
    url?: true
    secure_url?: true
    product_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageProductCountAggregateInputType = {
    id?: true
    asset_id?: true
    public_id?: true
    url?: true
    secure_url?: true
    product_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageProduct to aggregate.
     */
    where?: ImageProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageProducts to fetch.
     */
    orderBy?: ImageProductOrderByWithRelationInput | ImageProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImageProducts
    **/
    _count?: true | ImageProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageProductMaxAggregateInputType
  }

  export type GetImageProductAggregateType<T extends ImageProductAggregateArgs> = {
        [P in keyof T & keyof AggregateImageProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageProduct[P]>
      : GetScalarType<T[P], AggregateImageProduct[P]>
  }




  export type ImageProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageProductWhereInput
    orderBy?: ImageProductOrderByWithAggregationInput | ImageProductOrderByWithAggregationInput[]
    by: ImageProductScalarFieldEnum[] | ImageProductScalarFieldEnum
    having?: ImageProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageProductCountAggregateInputType | true
    _avg?: ImageProductAvgAggregateInputType
    _sum?: ImageProductSumAggregateInputType
    _min?: ImageProductMinAggregateInputType
    _max?: ImageProductMaxAggregateInputType
  }

  export type ImageProductGroupByOutputType = {
    id: number
    asset_id: string
    public_id: string
    url: string
    secure_url: string
    product_id: number
    createdAt: Date
    updatedAt: Date
    _count: ImageProductCountAggregateOutputType | null
    _avg: ImageProductAvgAggregateOutputType | null
    _sum: ImageProductSumAggregateOutputType | null
    _min: ImageProductMinAggregateOutputType | null
    _max: ImageProductMaxAggregateOutputType | null
  }

  type GetImageProductGroupByPayload<T extends ImageProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageProductGroupByOutputType[P]>
            : GetScalarType<T[P], ImageProductGroupByOutputType[P]>
        }
      >
    >


  export type ImageProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset_id?: boolean
    public_id?: boolean
    url?: boolean
    secure_url?: boolean
    product_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageProduct"]>



  export type ImageProductSelectScalar = {
    id?: boolean
    asset_id?: boolean
    public_id?: boolean
    url?: boolean
    secure_url?: boolean
    product_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImageProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "asset_id" | "public_id" | "url" | "secure_url" | "product_id" | "createdAt" | "updatedAt", ExtArgs["result"]["imageProduct"]>
  export type ImageProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ImageProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImageProduct"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      asset_id: string
      public_id: string
      url: string
      secure_url: string
      product_id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["imageProduct"]>
    composites: {}
  }

  type ImageProductGetPayload<S extends boolean | null | undefined | ImageProductDefaultArgs> = $Result.GetResult<Prisma.$ImageProductPayload, S>

  type ImageProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageProductCountAggregateInputType | true
    }

  export interface ImageProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImageProduct'], meta: { name: 'ImageProduct' } }
    /**
     * Find zero or one ImageProduct that matches the filter.
     * @param {ImageProductFindUniqueArgs} args - Arguments to find a ImageProduct
     * @example
     * // Get one ImageProduct
     * const imageProduct = await prisma.imageProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageProductFindUniqueArgs>(args: SelectSubset<T, ImageProductFindUniqueArgs<ExtArgs>>): Prisma__ImageProductClient<$Result.GetResult<Prisma.$ImageProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImageProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageProductFindUniqueOrThrowArgs} args - Arguments to find a ImageProduct
     * @example
     * // Get one ImageProduct
     * const imageProduct = await prisma.imageProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageProductClient<$Result.GetResult<Prisma.$ImageProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageProductFindFirstArgs} args - Arguments to find a ImageProduct
     * @example
     * // Get one ImageProduct
     * const imageProduct = await prisma.imageProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageProductFindFirstArgs>(args?: SelectSubset<T, ImageProductFindFirstArgs<ExtArgs>>): Prisma__ImageProductClient<$Result.GetResult<Prisma.$ImageProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageProductFindFirstOrThrowArgs} args - Arguments to find a ImageProduct
     * @example
     * // Get one ImageProduct
     * const imageProduct = await prisma.imageProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageProductClient<$Result.GetResult<Prisma.$ImageProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImageProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageProducts
     * const imageProducts = await prisma.imageProduct.findMany()
     * 
     * // Get first 10 ImageProducts
     * const imageProducts = await prisma.imageProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageProductWithIdOnly = await prisma.imageProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageProductFindManyArgs>(args?: SelectSubset<T, ImageProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImageProduct.
     * @param {ImageProductCreateArgs} args - Arguments to create a ImageProduct.
     * @example
     * // Create one ImageProduct
     * const ImageProduct = await prisma.imageProduct.create({
     *   data: {
     *     // ... data to create a ImageProduct
     *   }
     * })
     * 
     */
    create<T extends ImageProductCreateArgs>(args: SelectSubset<T, ImageProductCreateArgs<ExtArgs>>): Prisma__ImageProductClient<$Result.GetResult<Prisma.$ImageProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImageProducts.
     * @param {ImageProductCreateManyArgs} args - Arguments to create many ImageProducts.
     * @example
     * // Create many ImageProducts
     * const imageProduct = await prisma.imageProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageProductCreateManyArgs>(args?: SelectSubset<T, ImageProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ImageProduct.
     * @param {ImageProductDeleteArgs} args - Arguments to delete one ImageProduct.
     * @example
     * // Delete one ImageProduct
     * const ImageProduct = await prisma.imageProduct.delete({
     *   where: {
     *     // ... filter to delete one ImageProduct
     *   }
     * })
     * 
     */
    delete<T extends ImageProductDeleteArgs>(args: SelectSubset<T, ImageProductDeleteArgs<ExtArgs>>): Prisma__ImageProductClient<$Result.GetResult<Prisma.$ImageProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImageProduct.
     * @param {ImageProductUpdateArgs} args - Arguments to update one ImageProduct.
     * @example
     * // Update one ImageProduct
     * const imageProduct = await prisma.imageProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageProductUpdateArgs>(args: SelectSubset<T, ImageProductUpdateArgs<ExtArgs>>): Prisma__ImageProductClient<$Result.GetResult<Prisma.$ImageProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImageProducts.
     * @param {ImageProductDeleteManyArgs} args - Arguments to filter ImageProducts to delete.
     * @example
     * // Delete a few ImageProducts
     * const { count } = await prisma.imageProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageProductDeleteManyArgs>(args?: SelectSubset<T, ImageProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageProducts
     * const imageProduct = await prisma.imageProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageProductUpdateManyArgs>(args: SelectSubset<T, ImageProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImageProduct.
     * @param {ImageProductUpsertArgs} args - Arguments to update or create a ImageProduct.
     * @example
     * // Update or create a ImageProduct
     * const imageProduct = await prisma.imageProduct.upsert({
     *   create: {
     *     // ... data to create a ImageProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageProduct we want to update
     *   }
     * })
     */
    upsert<T extends ImageProductUpsertArgs>(args: SelectSubset<T, ImageProductUpsertArgs<ExtArgs>>): Prisma__ImageProductClient<$Result.GetResult<Prisma.$ImageProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImageProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageProductCountArgs} args - Arguments to filter ImageProducts to count.
     * @example
     * // Count the number of ImageProducts
     * const count = await prisma.imageProduct.count({
     *   where: {
     *     // ... the filter for the ImageProducts we want to count
     *   }
     * })
    **/
    count<T extends ImageProductCountArgs>(
      args?: Subset<T, ImageProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageProductAggregateArgs>(args: Subset<T, ImageProductAggregateArgs>): Prisma.PrismaPromise<GetImageProductAggregateType<T>>

    /**
     * Group by ImageProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageProductGroupByArgs} args - Group by arguments.
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
      T extends ImageProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageProductGroupByArgs['orderBy'] }
        : { orderBy?: ImageProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ImageProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImageProduct model
   */
  readonly fields: ImageProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImageProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImageProduct model
   */
  interface ImageProductFieldRefs {
    readonly id: FieldRef<"ImageProduct", 'Int'>
    readonly asset_id: FieldRef<"ImageProduct", 'String'>
    readonly public_id: FieldRef<"ImageProduct", 'String'>
    readonly url: FieldRef<"ImageProduct", 'String'>
    readonly secure_url: FieldRef<"ImageProduct", 'String'>
    readonly product_id: FieldRef<"ImageProduct", 'Int'>
    readonly createdAt: FieldRef<"ImageProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"ImageProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImageProduct findUnique
   */
  export type ImageProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageProduct
     */
    select?: ImageProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageProduct
     */
    omit?: ImageProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageProductInclude<ExtArgs> | null
    /**
     * Filter, which ImageProduct to fetch.
     */
    where: ImageProductWhereUniqueInput
  }

  /**
   * ImageProduct findUniqueOrThrow
   */
  export type ImageProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageProduct
     */
    select?: ImageProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageProduct
     */
    omit?: ImageProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageProductInclude<ExtArgs> | null
    /**
     * Filter, which ImageProduct to fetch.
     */
    where: ImageProductWhereUniqueInput
  }

  /**
   * ImageProduct findFirst
   */
  export type ImageProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageProduct
     */
    select?: ImageProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageProduct
     */
    omit?: ImageProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageProductInclude<ExtArgs> | null
    /**
     * Filter, which ImageProduct to fetch.
     */
    where?: ImageProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageProducts to fetch.
     */
    orderBy?: ImageProductOrderByWithRelationInput | ImageProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageProducts.
     */
    cursor?: ImageProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageProducts.
     */
    distinct?: ImageProductScalarFieldEnum | ImageProductScalarFieldEnum[]
  }

  /**
   * ImageProduct findFirstOrThrow
   */
  export type ImageProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageProduct
     */
    select?: ImageProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageProduct
     */
    omit?: ImageProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageProductInclude<ExtArgs> | null
    /**
     * Filter, which ImageProduct to fetch.
     */
    where?: ImageProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageProducts to fetch.
     */
    orderBy?: ImageProductOrderByWithRelationInput | ImageProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageProducts.
     */
    cursor?: ImageProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageProducts.
     */
    distinct?: ImageProductScalarFieldEnum | ImageProductScalarFieldEnum[]
  }

  /**
   * ImageProduct findMany
   */
  export type ImageProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageProduct
     */
    select?: ImageProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageProduct
     */
    omit?: ImageProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageProductInclude<ExtArgs> | null
    /**
     * Filter, which ImageProducts to fetch.
     */
    where?: ImageProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageProducts to fetch.
     */
    orderBy?: ImageProductOrderByWithRelationInput | ImageProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImageProducts.
     */
    cursor?: ImageProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageProducts.
     */
    skip?: number
    distinct?: ImageProductScalarFieldEnum | ImageProductScalarFieldEnum[]
  }

  /**
   * ImageProduct create
   */
  export type ImageProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageProduct
     */
    select?: ImageProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageProduct
     */
    omit?: ImageProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageProductInclude<ExtArgs> | null
    /**
     * The data needed to create a ImageProduct.
     */
    data: XOR<ImageProductCreateInput, ImageProductUncheckedCreateInput>
  }

  /**
   * ImageProduct createMany
   */
  export type ImageProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImageProducts.
     */
    data: ImageProductCreateManyInput | ImageProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageProduct update
   */
  export type ImageProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageProduct
     */
    select?: ImageProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageProduct
     */
    omit?: ImageProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageProductInclude<ExtArgs> | null
    /**
     * The data needed to update a ImageProduct.
     */
    data: XOR<ImageProductUpdateInput, ImageProductUncheckedUpdateInput>
    /**
     * Choose, which ImageProduct to update.
     */
    where: ImageProductWhereUniqueInput
  }

  /**
   * ImageProduct updateMany
   */
  export type ImageProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImageProducts.
     */
    data: XOR<ImageProductUpdateManyMutationInput, ImageProductUncheckedUpdateManyInput>
    /**
     * Filter which ImageProducts to update
     */
    where?: ImageProductWhereInput
    /**
     * Limit how many ImageProducts to update.
     */
    limit?: number
  }

  /**
   * ImageProduct upsert
   */
  export type ImageProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageProduct
     */
    select?: ImageProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageProduct
     */
    omit?: ImageProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageProductInclude<ExtArgs> | null
    /**
     * The filter to search for the ImageProduct to update in case it exists.
     */
    where: ImageProductWhereUniqueInput
    /**
     * In case the ImageProduct found by the `where` argument doesn't exist, create a new ImageProduct with this data.
     */
    create: XOR<ImageProductCreateInput, ImageProductUncheckedCreateInput>
    /**
     * In case the ImageProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageProductUpdateInput, ImageProductUncheckedUpdateInput>
  }

  /**
   * ImageProduct delete
   */
  export type ImageProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageProduct
     */
    select?: ImageProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageProduct
     */
    omit?: ImageProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageProductInclude<ExtArgs> | null
    /**
     * Filter which ImageProduct to delete.
     */
    where: ImageProductWhereUniqueInput
  }

  /**
   * ImageProduct deleteMany
   */
  export type ImageProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageProducts to delete
     */
    where?: ImageProductWhereInput
    /**
     * Limit how many ImageProducts to delete.
     */
    limit?: number
  }

  /**
   * ImageProduct without action
   */
  export type ImageProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageProduct
     */
    select?: ImageProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageProduct
     */
    omit?: ImageProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageProductInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    final_price_product: number | null
    cartprice: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    final_price_product: number | null
    cartprice: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    final_price_product: number | null
    dueDate: Date | null
    cartprice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    final_price_product: number | null
    dueDate: Date | null
    cartprice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    product_id: number
    user_id: number
    final_price_product: number
    dueDate: number
    cartprice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    final_price_product?: true
    cartprice?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    final_price_product?: true
    cartprice?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    final_price_product?: true
    dueDate?: true
    cartprice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    final_price_product?: true
    dueDate?: true
    cartprice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    final_price_product?: true
    dueDate?: true
    cartprice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: number
    product_id: number
    user_id: number
    final_price_product: number
    dueDate: Date
    cartprice: number
    createdAt: Date
    updatedAt: Date
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    user_id?: boolean
    final_price_product?: boolean
    dueDate?: boolean
    cartprice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>



  export type CartSelectScalar = {
    id?: boolean
    product_id?: boolean
    user_id?: boolean
    final_price_product?: boolean
    dueDate?: boolean
    cartprice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "user_id" | "final_price_product" | "dueDate" | "cartprice" | "createdAt" | "updatedAt", ExtArgs["result"]["cart"]>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number
      user_id: number
      final_price_product: number
      dueDate: Date
      cartprice: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
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
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'Int'>
    readonly product_id: FieldRef<"Cart", 'Int'>
    readonly user_id: FieldRef<"Cart", 'Int'>
    readonly final_price_product: FieldRef<"Cart", 'Float'>
    readonly dueDate: FieldRef<"Cart", 'DateTime'>
    readonly cartprice: FieldRef<"Cart", 'Float'>
    readonly createdAt: FieldRef<"Cart", 'DateTime'>
    readonly updatedAt: FieldRef<"Cart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model Auctioneer_Board
   */

  export type AggregateAuctioneer_Board = {
    _count: Auctioneer_BoardCountAggregateOutputType | null
    _avg: Auctioneer_BoardAvgAggregateOutputType | null
    _sum: Auctioneer_BoardSumAggregateOutputType | null
    _min: Auctioneer_BoardMinAggregateOutputType | null
    _max: Auctioneer_BoardMaxAggregateOutputType | null
  }

  export type Auctioneer_BoardAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    product_id: number | null
    price_offer: number | null
  }

  export type Auctioneer_BoardSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    product_id: number | null
    price_offer: number | null
  }

  export type Auctioneer_BoardMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    product_id: number | null
    price_offer: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Auctioneer_BoardMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    product_id: number | null
    price_offer: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Auctioneer_BoardCountAggregateOutputType = {
    id: number
    user_id: number
    product_id: number
    price_offer: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Auctioneer_BoardAvgAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    price_offer?: true
  }

  export type Auctioneer_BoardSumAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    price_offer?: true
  }

  export type Auctioneer_BoardMinAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    price_offer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Auctioneer_BoardMaxAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    price_offer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Auctioneer_BoardCountAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    price_offer?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Auctioneer_BoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auctioneer_Board to aggregate.
     */
    where?: Auctioneer_BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctioneer_Boards to fetch.
     */
    orderBy?: Auctioneer_BoardOrderByWithRelationInput | Auctioneer_BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Auctioneer_BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctioneer_Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctioneer_Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auctioneer_Boards
    **/
    _count?: true | Auctioneer_BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auctioneer_BoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auctioneer_BoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auctioneer_BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auctioneer_BoardMaxAggregateInputType
  }

  export type GetAuctioneer_BoardAggregateType<T extends Auctioneer_BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateAuctioneer_Board]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuctioneer_Board[P]>
      : GetScalarType<T[P], AggregateAuctioneer_Board[P]>
  }




  export type Auctioneer_BoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Auctioneer_BoardWhereInput
    orderBy?: Auctioneer_BoardOrderByWithAggregationInput | Auctioneer_BoardOrderByWithAggregationInput[]
    by: Auctioneer_BoardScalarFieldEnum[] | Auctioneer_BoardScalarFieldEnum
    having?: Auctioneer_BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auctioneer_BoardCountAggregateInputType | true
    _avg?: Auctioneer_BoardAvgAggregateInputType
    _sum?: Auctioneer_BoardSumAggregateInputType
    _min?: Auctioneer_BoardMinAggregateInputType
    _max?: Auctioneer_BoardMaxAggregateInputType
  }

  export type Auctioneer_BoardGroupByOutputType = {
    id: number
    user_id: number
    product_id: number
    price_offer: number
    createdAt: Date
    updatedAt: Date
    _count: Auctioneer_BoardCountAggregateOutputType | null
    _avg: Auctioneer_BoardAvgAggregateOutputType | null
    _sum: Auctioneer_BoardSumAggregateOutputType | null
    _min: Auctioneer_BoardMinAggregateOutputType | null
    _max: Auctioneer_BoardMaxAggregateOutputType | null
  }

  type GetAuctioneer_BoardGroupByPayload<T extends Auctioneer_BoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Auctioneer_BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auctioneer_BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auctioneer_BoardGroupByOutputType[P]>
            : GetScalarType<T[P], Auctioneer_BoardGroupByOutputType[P]>
        }
      >
    >


  export type Auctioneer_BoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    price_offer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auctioneer_Board"]>



  export type Auctioneer_BoardSelectScalar = {
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    price_offer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Auctioneer_BoardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "product_id" | "price_offer" | "createdAt" | "updatedAt", ExtArgs["result"]["auctioneer_Board"]>
  export type Auctioneer_BoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $Auctioneer_BoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auctioneer_Board"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      product_id: number
      price_offer: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["auctioneer_Board"]>
    composites: {}
  }

  type Auctioneer_BoardGetPayload<S extends boolean | null | undefined | Auctioneer_BoardDefaultArgs> = $Result.GetResult<Prisma.$Auctioneer_BoardPayload, S>

  type Auctioneer_BoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Auctioneer_BoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Auctioneer_BoardCountAggregateInputType | true
    }

  export interface Auctioneer_BoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auctioneer_Board'], meta: { name: 'Auctioneer_Board' } }
    /**
     * Find zero or one Auctioneer_Board that matches the filter.
     * @param {Auctioneer_BoardFindUniqueArgs} args - Arguments to find a Auctioneer_Board
     * @example
     * // Get one Auctioneer_Board
     * const auctioneer_Board = await prisma.auctioneer_Board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Auctioneer_BoardFindUniqueArgs>(args: SelectSubset<T, Auctioneer_BoardFindUniqueArgs<ExtArgs>>): Prisma__Auctioneer_BoardClient<$Result.GetResult<Prisma.$Auctioneer_BoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auctioneer_Board that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Auctioneer_BoardFindUniqueOrThrowArgs} args - Arguments to find a Auctioneer_Board
     * @example
     * // Get one Auctioneer_Board
     * const auctioneer_Board = await prisma.auctioneer_Board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Auctioneer_BoardFindUniqueOrThrowArgs>(args: SelectSubset<T, Auctioneer_BoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Auctioneer_BoardClient<$Result.GetResult<Prisma.$Auctioneer_BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auctioneer_Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auctioneer_BoardFindFirstArgs} args - Arguments to find a Auctioneer_Board
     * @example
     * // Get one Auctioneer_Board
     * const auctioneer_Board = await prisma.auctioneer_Board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Auctioneer_BoardFindFirstArgs>(args?: SelectSubset<T, Auctioneer_BoardFindFirstArgs<ExtArgs>>): Prisma__Auctioneer_BoardClient<$Result.GetResult<Prisma.$Auctioneer_BoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auctioneer_Board that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auctioneer_BoardFindFirstOrThrowArgs} args - Arguments to find a Auctioneer_Board
     * @example
     * // Get one Auctioneer_Board
     * const auctioneer_Board = await prisma.auctioneer_Board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Auctioneer_BoardFindFirstOrThrowArgs>(args?: SelectSubset<T, Auctioneer_BoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__Auctioneer_BoardClient<$Result.GetResult<Prisma.$Auctioneer_BoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auctioneer_Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auctioneer_BoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auctioneer_Boards
     * const auctioneer_Boards = await prisma.auctioneer_Board.findMany()
     * 
     * // Get first 10 Auctioneer_Boards
     * const auctioneer_Boards = await prisma.auctioneer_Board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auctioneer_BoardWithIdOnly = await prisma.auctioneer_Board.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Auctioneer_BoardFindManyArgs>(args?: SelectSubset<T, Auctioneer_BoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Auctioneer_BoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auctioneer_Board.
     * @param {Auctioneer_BoardCreateArgs} args - Arguments to create a Auctioneer_Board.
     * @example
     * // Create one Auctioneer_Board
     * const Auctioneer_Board = await prisma.auctioneer_Board.create({
     *   data: {
     *     // ... data to create a Auctioneer_Board
     *   }
     * })
     * 
     */
    create<T extends Auctioneer_BoardCreateArgs>(args: SelectSubset<T, Auctioneer_BoardCreateArgs<ExtArgs>>): Prisma__Auctioneer_BoardClient<$Result.GetResult<Prisma.$Auctioneer_BoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auctioneer_Boards.
     * @param {Auctioneer_BoardCreateManyArgs} args - Arguments to create many Auctioneer_Boards.
     * @example
     * // Create many Auctioneer_Boards
     * const auctioneer_Board = await prisma.auctioneer_Board.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Auctioneer_BoardCreateManyArgs>(args?: SelectSubset<T, Auctioneer_BoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Auctioneer_Board.
     * @param {Auctioneer_BoardDeleteArgs} args - Arguments to delete one Auctioneer_Board.
     * @example
     * // Delete one Auctioneer_Board
     * const Auctioneer_Board = await prisma.auctioneer_Board.delete({
     *   where: {
     *     // ... filter to delete one Auctioneer_Board
     *   }
     * })
     * 
     */
    delete<T extends Auctioneer_BoardDeleteArgs>(args: SelectSubset<T, Auctioneer_BoardDeleteArgs<ExtArgs>>): Prisma__Auctioneer_BoardClient<$Result.GetResult<Prisma.$Auctioneer_BoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auctioneer_Board.
     * @param {Auctioneer_BoardUpdateArgs} args - Arguments to update one Auctioneer_Board.
     * @example
     * // Update one Auctioneer_Board
     * const auctioneer_Board = await prisma.auctioneer_Board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Auctioneer_BoardUpdateArgs>(args: SelectSubset<T, Auctioneer_BoardUpdateArgs<ExtArgs>>): Prisma__Auctioneer_BoardClient<$Result.GetResult<Prisma.$Auctioneer_BoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auctioneer_Boards.
     * @param {Auctioneer_BoardDeleteManyArgs} args - Arguments to filter Auctioneer_Boards to delete.
     * @example
     * // Delete a few Auctioneer_Boards
     * const { count } = await prisma.auctioneer_Board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Auctioneer_BoardDeleteManyArgs>(args?: SelectSubset<T, Auctioneer_BoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auctioneer_Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auctioneer_BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auctioneer_Boards
     * const auctioneer_Board = await prisma.auctioneer_Board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Auctioneer_BoardUpdateManyArgs>(args: SelectSubset<T, Auctioneer_BoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Auctioneer_Board.
     * @param {Auctioneer_BoardUpsertArgs} args - Arguments to update or create a Auctioneer_Board.
     * @example
     * // Update or create a Auctioneer_Board
     * const auctioneer_Board = await prisma.auctioneer_Board.upsert({
     *   create: {
     *     // ... data to create a Auctioneer_Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auctioneer_Board we want to update
     *   }
     * })
     */
    upsert<T extends Auctioneer_BoardUpsertArgs>(args: SelectSubset<T, Auctioneer_BoardUpsertArgs<ExtArgs>>): Prisma__Auctioneer_BoardClient<$Result.GetResult<Prisma.$Auctioneer_BoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auctioneer_Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auctioneer_BoardCountArgs} args - Arguments to filter Auctioneer_Boards to count.
     * @example
     * // Count the number of Auctioneer_Boards
     * const count = await prisma.auctioneer_Board.count({
     *   where: {
     *     // ... the filter for the Auctioneer_Boards we want to count
     *   }
     * })
    **/
    count<T extends Auctioneer_BoardCountArgs>(
      args?: Subset<T, Auctioneer_BoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auctioneer_BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auctioneer_Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auctioneer_BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Auctioneer_BoardAggregateArgs>(args: Subset<T, Auctioneer_BoardAggregateArgs>): Prisma.PrismaPromise<GetAuctioneer_BoardAggregateType<T>>

    /**
     * Group by Auctioneer_Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auctioneer_BoardGroupByArgs} args - Group by arguments.
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
      T extends Auctioneer_BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Auctioneer_BoardGroupByArgs['orderBy'] }
        : { orderBy?: Auctioneer_BoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Auctioneer_BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuctioneer_BoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auctioneer_Board model
   */
  readonly fields: Auctioneer_BoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auctioneer_Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Auctioneer_BoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Auctioneer_Board model
   */
  interface Auctioneer_BoardFieldRefs {
    readonly id: FieldRef<"Auctioneer_Board", 'Int'>
    readonly user_id: FieldRef<"Auctioneer_Board", 'Int'>
    readonly product_id: FieldRef<"Auctioneer_Board", 'Int'>
    readonly price_offer: FieldRef<"Auctioneer_Board", 'Float'>
    readonly createdAt: FieldRef<"Auctioneer_Board", 'DateTime'>
    readonly updatedAt: FieldRef<"Auctioneer_Board", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Auctioneer_Board findUnique
   */
  export type Auctioneer_BoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auctioneer_Board
     */
    select?: Auctioneer_BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auctioneer_Board
     */
    omit?: Auctioneer_BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auctioneer_BoardInclude<ExtArgs> | null
    /**
     * Filter, which Auctioneer_Board to fetch.
     */
    where: Auctioneer_BoardWhereUniqueInput
  }

  /**
   * Auctioneer_Board findUniqueOrThrow
   */
  export type Auctioneer_BoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auctioneer_Board
     */
    select?: Auctioneer_BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auctioneer_Board
     */
    omit?: Auctioneer_BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auctioneer_BoardInclude<ExtArgs> | null
    /**
     * Filter, which Auctioneer_Board to fetch.
     */
    where: Auctioneer_BoardWhereUniqueInput
  }

  /**
   * Auctioneer_Board findFirst
   */
  export type Auctioneer_BoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auctioneer_Board
     */
    select?: Auctioneer_BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auctioneer_Board
     */
    omit?: Auctioneer_BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auctioneer_BoardInclude<ExtArgs> | null
    /**
     * Filter, which Auctioneer_Board to fetch.
     */
    where?: Auctioneer_BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctioneer_Boards to fetch.
     */
    orderBy?: Auctioneer_BoardOrderByWithRelationInput | Auctioneer_BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auctioneer_Boards.
     */
    cursor?: Auctioneer_BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctioneer_Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctioneer_Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auctioneer_Boards.
     */
    distinct?: Auctioneer_BoardScalarFieldEnum | Auctioneer_BoardScalarFieldEnum[]
  }

  /**
   * Auctioneer_Board findFirstOrThrow
   */
  export type Auctioneer_BoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auctioneer_Board
     */
    select?: Auctioneer_BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auctioneer_Board
     */
    omit?: Auctioneer_BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auctioneer_BoardInclude<ExtArgs> | null
    /**
     * Filter, which Auctioneer_Board to fetch.
     */
    where?: Auctioneer_BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctioneer_Boards to fetch.
     */
    orderBy?: Auctioneer_BoardOrderByWithRelationInput | Auctioneer_BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auctioneer_Boards.
     */
    cursor?: Auctioneer_BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctioneer_Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctioneer_Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auctioneer_Boards.
     */
    distinct?: Auctioneer_BoardScalarFieldEnum | Auctioneer_BoardScalarFieldEnum[]
  }

  /**
   * Auctioneer_Board findMany
   */
  export type Auctioneer_BoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auctioneer_Board
     */
    select?: Auctioneer_BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auctioneer_Board
     */
    omit?: Auctioneer_BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auctioneer_BoardInclude<ExtArgs> | null
    /**
     * Filter, which Auctioneer_Boards to fetch.
     */
    where?: Auctioneer_BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctioneer_Boards to fetch.
     */
    orderBy?: Auctioneer_BoardOrderByWithRelationInput | Auctioneer_BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auctioneer_Boards.
     */
    cursor?: Auctioneer_BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctioneer_Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctioneer_Boards.
     */
    skip?: number
    distinct?: Auctioneer_BoardScalarFieldEnum | Auctioneer_BoardScalarFieldEnum[]
  }

  /**
   * Auctioneer_Board create
   */
  export type Auctioneer_BoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auctioneer_Board
     */
    select?: Auctioneer_BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auctioneer_Board
     */
    omit?: Auctioneer_BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auctioneer_BoardInclude<ExtArgs> | null
    /**
     * The data needed to create a Auctioneer_Board.
     */
    data: XOR<Auctioneer_BoardCreateInput, Auctioneer_BoardUncheckedCreateInput>
  }

  /**
   * Auctioneer_Board createMany
   */
  export type Auctioneer_BoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auctioneer_Boards.
     */
    data: Auctioneer_BoardCreateManyInput | Auctioneer_BoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auctioneer_Board update
   */
  export type Auctioneer_BoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auctioneer_Board
     */
    select?: Auctioneer_BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auctioneer_Board
     */
    omit?: Auctioneer_BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auctioneer_BoardInclude<ExtArgs> | null
    /**
     * The data needed to update a Auctioneer_Board.
     */
    data: XOR<Auctioneer_BoardUpdateInput, Auctioneer_BoardUncheckedUpdateInput>
    /**
     * Choose, which Auctioneer_Board to update.
     */
    where: Auctioneer_BoardWhereUniqueInput
  }

  /**
   * Auctioneer_Board updateMany
   */
  export type Auctioneer_BoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auctioneer_Boards.
     */
    data: XOR<Auctioneer_BoardUpdateManyMutationInput, Auctioneer_BoardUncheckedUpdateManyInput>
    /**
     * Filter which Auctioneer_Boards to update
     */
    where?: Auctioneer_BoardWhereInput
    /**
     * Limit how many Auctioneer_Boards to update.
     */
    limit?: number
  }

  /**
   * Auctioneer_Board upsert
   */
  export type Auctioneer_BoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auctioneer_Board
     */
    select?: Auctioneer_BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auctioneer_Board
     */
    omit?: Auctioneer_BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auctioneer_BoardInclude<ExtArgs> | null
    /**
     * The filter to search for the Auctioneer_Board to update in case it exists.
     */
    where: Auctioneer_BoardWhereUniqueInput
    /**
     * In case the Auctioneer_Board found by the `where` argument doesn't exist, create a new Auctioneer_Board with this data.
     */
    create: XOR<Auctioneer_BoardCreateInput, Auctioneer_BoardUncheckedCreateInput>
    /**
     * In case the Auctioneer_Board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Auctioneer_BoardUpdateInput, Auctioneer_BoardUncheckedUpdateInput>
  }

  /**
   * Auctioneer_Board delete
   */
  export type Auctioneer_BoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auctioneer_Board
     */
    select?: Auctioneer_BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auctioneer_Board
     */
    omit?: Auctioneer_BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auctioneer_BoardInclude<ExtArgs> | null
    /**
     * Filter which Auctioneer_Board to delete.
     */
    where: Auctioneer_BoardWhereUniqueInput
  }

  /**
   * Auctioneer_Board deleteMany
   */
  export type Auctioneer_BoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auctioneer_Boards to delete
     */
    where?: Auctioneer_BoardWhereInput
    /**
     * Limit how many Auctioneer_Boards to delete.
     */
    limit?: number
  }

  /**
   * Auctioneer_Board without action
   */
  export type Auctioneer_BoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auctioneer_Board
     */
    select?: Auctioneer_BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auctioneer_Board
     */
    omit?: Auctioneer_BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Auctioneer_BoardInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_price: number | null
    orderStatus: number | null
    paymentType: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_price: number | null
    orderStatus: number | null
    paymentType: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_price: number | null
    address: string | null
    phone: string | null
    orderStatus: number | null
    paymentType: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_price: number | null
    address: string | null
    phone: string | null
    orderStatus: number | null
    paymentType: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    user_id: number
    total_price: number
    address: number
    phone: number
    orderStatus: number
    paymentType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    orderStatus?: true
    paymentType?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    orderStatus?: true
    paymentType?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    address?: true
    phone?: true
    orderStatus?: true
    paymentType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    address?: true
    phone?: true
    orderStatus?: true
    paymentType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    user_id?: true
    total_price?: true
    address?: true
    phone?: true
    orderStatus?: true
    paymentType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    user_id: number
    total_price: number
    address: string
    phone: string
    orderStatus: number
    paymentType: number
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    total_price?: boolean
    address?: boolean
    phone?: boolean
    orderStatus?: boolean
    paymentType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    products?: boolean | Order$productsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type OrderSelectScalar = {
    id?: boolean
    user_id?: boolean
    total_price?: boolean
    address?: boolean
    phone?: boolean
    orderStatus?: boolean
    paymentType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "total_price" | "address" | "phone" | "orderStatus" | "paymentType" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    products?: boolean | Order$productsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      products: Prisma.$ProductOnOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      total_price: number
      address: string
      phone: string
      orderStatus: number
      paymentType: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends Order$productsArgs<ExtArgs> = {}>(args?: Subset<T, Order$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOnOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly user_id: FieldRef<"Order", 'Int'>
    readonly total_price: FieldRef<"Order", 'Float'>
    readonly address: FieldRef<"Order", 'String'>
    readonly phone: FieldRef<"Order", 'String'>
    readonly orderStatus: FieldRef<"Order", 'Int'>
    readonly paymentType: FieldRef<"Order", 'Int'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.products
   */
  export type Order$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnOrder
     */
    select?: ProductOnOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOnOrder
     */
    omit?: ProductOnOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOnOrderInclude<ExtArgs> | null
    where?: ProductOnOrderWhereInput
    orderBy?: ProductOnOrderOrderByWithRelationInput | ProductOnOrderOrderByWithRelationInput[]
    cursor?: ProductOnOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductOnOrderScalarFieldEnum | ProductOnOrderScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model ProductOnOrder
   */

  export type AggregateProductOnOrder = {
    _count: ProductOnOrderCountAggregateOutputType | null
    _avg: ProductOnOrderAvgAggregateOutputType | null
    _sum: ProductOnOrderSumAggregateOutputType | null
    _min: ProductOnOrderMinAggregateOutputType | null
    _max: ProductOnOrderMaxAggregateOutputType | null
  }

  export type ProductOnOrderAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    final_price_product: number | null
  }

  export type ProductOnOrderSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    final_price_product: number | null
  }

  export type ProductOnOrderMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    final_price_product: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductOnOrderMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    final_price_product: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductOnOrderCountAggregateOutputType = {
    id: number
    order_id: number
    product_id: number
    final_price_product: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductOnOrderAvgAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    final_price_product?: true
  }

  export type ProductOnOrderSumAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    final_price_product?: true
  }

  export type ProductOnOrderMinAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    final_price_product?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductOnOrderMaxAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    final_price_product?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductOnOrderCountAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    final_price_product?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductOnOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductOnOrder to aggregate.
     */
    where?: ProductOnOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOnOrders to fetch.
     */
    orderBy?: ProductOnOrderOrderByWithRelationInput | ProductOnOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductOnOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOnOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOnOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductOnOrders
    **/
    _count?: true | ProductOnOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductOnOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductOnOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductOnOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductOnOrderMaxAggregateInputType
  }

  export type GetProductOnOrderAggregateType<T extends ProductOnOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateProductOnOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductOnOrder[P]>
      : GetScalarType<T[P], AggregateProductOnOrder[P]>
  }




  export type ProductOnOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductOnOrderWhereInput
    orderBy?: ProductOnOrderOrderByWithAggregationInput | ProductOnOrderOrderByWithAggregationInput[]
    by: ProductOnOrderScalarFieldEnum[] | ProductOnOrderScalarFieldEnum
    having?: ProductOnOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductOnOrderCountAggregateInputType | true
    _avg?: ProductOnOrderAvgAggregateInputType
    _sum?: ProductOnOrderSumAggregateInputType
    _min?: ProductOnOrderMinAggregateInputType
    _max?: ProductOnOrderMaxAggregateInputType
  }

  export type ProductOnOrderGroupByOutputType = {
    id: number
    order_id: number
    product_id: number
    final_price_product: number
    createdAt: Date
    updatedAt: Date
    _count: ProductOnOrderCountAggregateOutputType | null
    _avg: ProductOnOrderAvgAggregateOutputType | null
    _sum: ProductOnOrderSumAggregateOutputType | null
    _min: ProductOnOrderMinAggregateOutputType | null
    _max: ProductOnOrderMaxAggregateOutputType | null
  }

  type GetProductOnOrderGroupByPayload<T extends ProductOnOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductOnOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductOnOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductOnOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ProductOnOrderGroupByOutputType[P]>
        }
      >
    >


  export type ProductOnOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    final_price_product?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productOnOrder"]>



  export type ProductOnOrderSelectScalar = {
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    final_price_product?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOnOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "product_id" | "final_price_product" | "createdAt" | "updatedAt", ExtArgs["result"]["productOnOrder"]>
  export type ProductOnOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductOnOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductOnOrder"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number
      product_id: number
      final_price_product: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productOnOrder"]>
    composites: {}
  }

  type ProductOnOrderGetPayload<S extends boolean | null | undefined | ProductOnOrderDefaultArgs> = $Result.GetResult<Prisma.$ProductOnOrderPayload, S>

  type ProductOnOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductOnOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductOnOrderCountAggregateInputType | true
    }

  export interface ProductOnOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductOnOrder'], meta: { name: 'ProductOnOrder' } }
    /**
     * Find zero or one ProductOnOrder that matches the filter.
     * @param {ProductOnOrderFindUniqueArgs} args - Arguments to find a ProductOnOrder
     * @example
     * // Get one ProductOnOrder
     * const productOnOrder = await prisma.productOnOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductOnOrderFindUniqueArgs>(args: SelectSubset<T, ProductOnOrderFindUniqueArgs<ExtArgs>>): Prisma__ProductOnOrderClient<$Result.GetResult<Prisma.$ProductOnOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductOnOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductOnOrderFindUniqueOrThrowArgs} args - Arguments to find a ProductOnOrder
     * @example
     * // Get one ProductOnOrder
     * const productOnOrder = await prisma.productOnOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductOnOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductOnOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductOnOrderClient<$Result.GetResult<Prisma.$ProductOnOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductOnOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnOrderFindFirstArgs} args - Arguments to find a ProductOnOrder
     * @example
     * // Get one ProductOnOrder
     * const productOnOrder = await prisma.productOnOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductOnOrderFindFirstArgs>(args?: SelectSubset<T, ProductOnOrderFindFirstArgs<ExtArgs>>): Prisma__ProductOnOrderClient<$Result.GetResult<Prisma.$ProductOnOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductOnOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnOrderFindFirstOrThrowArgs} args - Arguments to find a ProductOnOrder
     * @example
     * // Get one ProductOnOrder
     * const productOnOrder = await prisma.productOnOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductOnOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductOnOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductOnOrderClient<$Result.GetResult<Prisma.$ProductOnOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductOnOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductOnOrders
     * const productOnOrders = await prisma.productOnOrder.findMany()
     * 
     * // Get first 10 ProductOnOrders
     * const productOnOrders = await prisma.productOnOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productOnOrderWithIdOnly = await prisma.productOnOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductOnOrderFindManyArgs>(args?: SelectSubset<T, ProductOnOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductOnOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductOnOrder.
     * @param {ProductOnOrderCreateArgs} args - Arguments to create a ProductOnOrder.
     * @example
     * // Create one ProductOnOrder
     * const ProductOnOrder = await prisma.productOnOrder.create({
     *   data: {
     *     // ... data to create a ProductOnOrder
     *   }
     * })
     * 
     */
    create<T extends ProductOnOrderCreateArgs>(args: SelectSubset<T, ProductOnOrderCreateArgs<ExtArgs>>): Prisma__ProductOnOrderClient<$Result.GetResult<Prisma.$ProductOnOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductOnOrders.
     * @param {ProductOnOrderCreateManyArgs} args - Arguments to create many ProductOnOrders.
     * @example
     * // Create many ProductOnOrders
     * const productOnOrder = await prisma.productOnOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductOnOrderCreateManyArgs>(args?: SelectSubset<T, ProductOnOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProductOnOrder.
     * @param {ProductOnOrderDeleteArgs} args - Arguments to delete one ProductOnOrder.
     * @example
     * // Delete one ProductOnOrder
     * const ProductOnOrder = await prisma.productOnOrder.delete({
     *   where: {
     *     // ... filter to delete one ProductOnOrder
     *   }
     * })
     * 
     */
    delete<T extends ProductOnOrderDeleteArgs>(args: SelectSubset<T, ProductOnOrderDeleteArgs<ExtArgs>>): Prisma__ProductOnOrderClient<$Result.GetResult<Prisma.$ProductOnOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductOnOrder.
     * @param {ProductOnOrderUpdateArgs} args - Arguments to update one ProductOnOrder.
     * @example
     * // Update one ProductOnOrder
     * const productOnOrder = await prisma.productOnOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductOnOrderUpdateArgs>(args: SelectSubset<T, ProductOnOrderUpdateArgs<ExtArgs>>): Prisma__ProductOnOrderClient<$Result.GetResult<Prisma.$ProductOnOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductOnOrders.
     * @param {ProductOnOrderDeleteManyArgs} args - Arguments to filter ProductOnOrders to delete.
     * @example
     * // Delete a few ProductOnOrders
     * const { count } = await prisma.productOnOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductOnOrderDeleteManyArgs>(args?: SelectSubset<T, ProductOnOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductOnOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductOnOrders
     * const productOnOrder = await prisma.productOnOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductOnOrderUpdateManyArgs>(args: SelectSubset<T, ProductOnOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductOnOrder.
     * @param {ProductOnOrderUpsertArgs} args - Arguments to update or create a ProductOnOrder.
     * @example
     * // Update or create a ProductOnOrder
     * const productOnOrder = await prisma.productOnOrder.upsert({
     *   create: {
     *     // ... data to create a ProductOnOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductOnOrder we want to update
     *   }
     * })
     */
    upsert<T extends ProductOnOrderUpsertArgs>(args: SelectSubset<T, ProductOnOrderUpsertArgs<ExtArgs>>): Prisma__ProductOnOrderClient<$Result.GetResult<Prisma.$ProductOnOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductOnOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnOrderCountArgs} args - Arguments to filter ProductOnOrders to count.
     * @example
     * // Count the number of ProductOnOrders
     * const count = await prisma.productOnOrder.count({
     *   where: {
     *     // ... the filter for the ProductOnOrders we want to count
     *   }
     * })
    **/
    count<T extends ProductOnOrderCountArgs>(
      args?: Subset<T, ProductOnOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductOnOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductOnOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductOnOrderAggregateArgs>(args: Subset<T, ProductOnOrderAggregateArgs>): Prisma.PrismaPromise<GetProductOnOrderAggregateType<T>>

    /**
     * Group by ProductOnOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductOnOrderGroupByArgs} args - Group by arguments.
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
      T extends ProductOnOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductOnOrderGroupByArgs['orderBy'] }
        : { orderBy?: ProductOnOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductOnOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductOnOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductOnOrder model
   */
  readonly fields: ProductOnOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductOnOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductOnOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductOnOrder model
   */
  interface ProductOnOrderFieldRefs {
    readonly id: FieldRef<"ProductOnOrder", 'Int'>
    readonly order_id: FieldRef<"ProductOnOrder", 'Int'>
    readonly product_id: FieldRef<"ProductOnOrder", 'Int'>
    readonly final_price_product: FieldRef<"ProductOnOrder", 'Float'>
    readonly createdAt: FieldRef<"ProductOnOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductOnOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductOnOrder findUnique
   */
  export type ProductOnOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnOrder
     */
    select?: ProductOnOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOnOrder
     */
    omit?: ProductOnOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOnOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductOnOrder to fetch.
     */
    where: ProductOnOrderWhereUniqueInput
  }

  /**
   * ProductOnOrder findUniqueOrThrow
   */
  export type ProductOnOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnOrder
     */
    select?: ProductOnOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOnOrder
     */
    omit?: ProductOnOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOnOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductOnOrder to fetch.
     */
    where: ProductOnOrderWhereUniqueInput
  }

  /**
   * ProductOnOrder findFirst
   */
  export type ProductOnOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnOrder
     */
    select?: ProductOnOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOnOrder
     */
    omit?: ProductOnOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOnOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductOnOrder to fetch.
     */
    where?: ProductOnOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOnOrders to fetch.
     */
    orderBy?: ProductOnOrderOrderByWithRelationInput | ProductOnOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOnOrders.
     */
    cursor?: ProductOnOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOnOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOnOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOnOrders.
     */
    distinct?: ProductOnOrderScalarFieldEnum | ProductOnOrderScalarFieldEnum[]
  }

  /**
   * ProductOnOrder findFirstOrThrow
   */
  export type ProductOnOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnOrder
     */
    select?: ProductOnOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOnOrder
     */
    omit?: ProductOnOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOnOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductOnOrder to fetch.
     */
    where?: ProductOnOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOnOrders to fetch.
     */
    orderBy?: ProductOnOrderOrderByWithRelationInput | ProductOnOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductOnOrders.
     */
    cursor?: ProductOnOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOnOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOnOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductOnOrders.
     */
    distinct?: ProductOnOrderScalarFieldEnum | ProductOnOrderScalarFieldEnum[]
  }

  /**
   * ProductOnOrder findMany
   */
  export type ProductOnOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnOrder
     */
    select?: ProductOnOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOnOrder
     */
    omit?: ProductOnOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOnOrderInclude<ExtArgs> | null
    /**
     * Filter, which ProductOnOrders to fetch.
     */
    where?: ProductOnOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductOnOrders to fetch.
     */
    orderBy?: ProductOnOrderOrderByWithRelationInput | ProductOnOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductOnOrders.
     */
    cursor?: ProductOnOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductOnOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductOnOrders.
     */
    skip?: number
    distinct?: ProductOnOrderScalarFieldEnum | ProductOnOrderScalarFieldEnum[]
  }

  /**
   * ProductOnOrder create
   */
  export type ProductOnOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnOrder
     */
    select?: ProductOnOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOnOrder
     */
    omit?: ProductOnOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOnOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductOnOrder.
     */
    data: XOR<ProductOnOrderCreateInput, ProductOnOrderUncheckedCreateInput>
  }

  /**
   * ProductOnOrder createMany
   */
  export type ProductOnOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductOnOrders.
     */
    data: ProductOnOrderCreateManyInput | ProductOnOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductOnOrder update
   */
  export type ProductOnOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnOrder
     */
    select?: ProductOnOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOnOrder
     */
    omit?: ProductOnOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOnOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductOnOrder.
     */
    data: XOR<ProductOnOrderUpdateInput, ProductOnOrderUncheckedUpdateInput>
    /**
     * Choose, which ProductOnOrder to update.
     */
    where: ProductOnOrderWhereUniqueInput
  }

  /**
   * ProductOnOrder updateMany
   */
  export type ProductOnOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductOnOrders.
     */
    data: XOR<ProductOnOrderUpdateManyMutationInput, ProductOnOrderUncheckedUpdateManyInput>
    /**
     * Filter which ProductOnOrders to update
     */
    where?: ProductOnOrderWhereInput
    /**
     * Limit how many ProductOnOrders to update.
     */
    limit?: number
  }

  /**
   * ProductOnOrder upsert
   */
  export type ProductOnOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnOrder
     */
    select?: ProductOnOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOnOrder
     */
    omit?: ProductOnOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOnOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductOnOrder to update in case it exists.
     */
    where: ProductOnOrderWhereUniqueInput
    /**
     * In case the ProductOnOrder found by the `where` argument doesn't exist, create a new ProductOnOrder with this data.
     */
    create: XOR<ProductOnOrderCreateInput, ProductOnOrderUncheckedCreateInput>
    /**
     * In case the ProductOnOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductOnOrderUpdateInput, ProductOnOrderUncheckedUpdateInput>
  }

  /**
   * ProductOnOrder delete
   */
  export type ProductOnOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnOrder
     */
    select?: ProductOnOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOnOrder
     */
    omit?: ProductOnOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOnOrderInclude<ExtArgs> | null
    /**
     * Filter which ProductOnOrder to delete.
     */
    where: ProductOnOrderWhereUniqueInput
  }

  /**
   * ProductOnOrder deleteMany
   */
  export type ProductOnOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductOnOrders to delete
     */
    where?: ProductOnOrderWhereInput
    /**
     * Limit how many ProductOnOrders to delete.
     */
    limit?: number
  }

  /**
   * ProductOnOrder without action
   */
  export type ProductOnOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductOnOrder
     */
    select?: ProductOnOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductOnOrder
     */
    omit?: ProductOnOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductOnOrderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    picture: 'picture',
    role: 'role',
    enabled: 'enabled',
    address: 'address',
    phone: 'phone',
    type_account: 'type_account',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    size: 'size',
    description: 'description',
    condition: 'condition',
    description_condition: 'description_condition',
    starting_price: 'starting_price',
    min_bid_price: 'min_bid_price',
    category_id: 'category_id',
    status: 'status',
    start_date: 'start_date',
    end_date: 'end_date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ImageProductScalarFieldEnum: {
    id: 'id',
    asset_id: 'asset_id',
    public_id: 'public_id',
    url: 'url',
    secure_url: 'secure_url',
    product_id: 'product_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImageProductScalarFieldEnum = (typeof ImageProductScalarFieldEnum)[keyof typeof ImageProductScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    user_id: 'user_id',
    final_price_product: 'final_price_product',
    dueDate: 'dueDate',
    cartprice: 'cartprice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const Auctioneer_BoardScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    product_id: 'product_id',
    price_offer: 'price_offer',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Auctioneer_BoardScalarFieldEnum = (typeof Auctioneer_BoardScalarFieldEnum)[keyof typeof Auctioneer_BoardScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    total_price: 'total_price',
    address: 'address',
    phone: 'phone',
    orderStatus: 'orderStatus',
    paymentType: 'paymentType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ProductOnOrderScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_id: 'product_id',
    final_price_product: 'final_price_product',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductOnOrderScalarFieldEnum = (typeof ProductOnOrderScalarFieldEnum)[keyof typeof ProductOnOrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    name: 'name',
    picture: 'picture',
    address: 'address',
    phone: 'phone'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const ProductOrderByRelevanceFieldEnum: {
    name: 'name',
    size: 'size',
    description: 'description',
    description_condition: 'description_condition'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const ImageProductOrderByRelevanceFieldEnum: {
    asset_id: 'asset_id',
    public_id: 'public_id',
    url: 'url',
    secure_url: 'secure_url'
  };

  export type ImageProductOrderByRelevanceFieldEnum = (typeof ImageProductOrderByRelevanceFieldEnum)[keyof typeof ImageProductOrderByRelevanceFieldEnum]


  export const OrderOrderByRelevanceFieldEnum: {
    address: 'address',
    phone: 'phone'
  };

  export type OrderOrderByRelevanceFieldEnum = (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    role?: IntFilter<"User"> | number
    enabled?: BoolFilter<"User"> | boolean
    address?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    type_account?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    carts?: CartListRelationFilter
    auctioneerBoards?: Auctioneer_BoardListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    role?: SortOrder
    enabled?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    type_account?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    carts?: CartOrderByRelationAggregateInput
    auctioneerBoards?: Auctioneer_BoardOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    picture?: StringNullableFilter<"User"> | string | null
    role?: IntFilter<"User"> | number
    enabled?: BoolFilter<"User"> | boolean
    address?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    type_account?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    carts?: CartListRelationFilter
    auctioneerBoards?: Auctioneer_BoardListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    role?: SortOrder
    enabled?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    type_account?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: IntWithAggregatesFilter<"User"> | number
    enabled?: BoolWithAggregatesFilter<"User"> | boolean
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    type_account?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    products?: ProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    size?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    condition?: FloatFilter<"Product"> | number
    description_condition?: StringNullableFilter<"Product"> | string | null
    starting_price?: FloatFilter<"Product"> | number
    min_bid_price?: FloatFilter<"Product"> | number
    category_id?: IntFilter<"Product"> | number
    status?: BoolFilter<"Product"> | boolean
    start_date?: DateTimeFilter<"Product"> | Date | string
    end_date?: DateTimeFilter<"Product"> | Date | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    images?: ImageProductListRelationFilter
    carts?: CartListRelationFilter
    auctioneerBoards?: Auctioneer_BoardListRelationFilter
    productOnOrders?: ProductOnOrderListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    description?: SortOrder
    condition?: SortOrder
    description_condition?: SortOrderInput | SortOrder
    starting_price?: SortOrder
    min_bid_price?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    images?: ImageProductOrderByRelationAggregateInput
    carts?: CartOrderByRelationAggregateInput
    auctioneerBoards?: Auctioneer_BoardOrderByRelationAggregateInput
    productOnOrders?: ProductOnOrderOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    size?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    condition?: FloatFilter<"Product"> | number
    description_condition?: StringNullableFilter<"Product"> | string | null
    starting_price?: FloatFilter<"Product"> | number
    min_bid_price?: FloatFilter<"Product"> | number
    category_id?: IntFilter<"Product"> | number
    status?: BoolFilter<"Product"> | boolean
    start_date?: DateTimeFilter<"Product"> | Date | string
    end_date?: DateTimeFilter<"Product"> | Date | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    images?: ImageProductListRelationFilter
    carts?: CartListRelationFilter
    auctioneerBoards?: Auctioneer_BoardListRelationFilter
    productOnOrders?: ProductOnOrderListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    description?: SortOrder
    condition?: SortOrder
    description_condition?: SortOrderInput | SortOrder
    starting_price?: SortOrder
    min_bid_price?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    size?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    condition?: FloatWithAggregatesFilter<"Product"> | number
    description_condition?: StringNullableWithAggregatesFilter<"Product"> | string | null
    starting_price?: FloatWithAggregatesFilter<"Product"> | number
    min_bid_price?: FloatWithAggregatesFilter<"Product"> | number
    category_id?: IntWithAggregatesFilter<"Product"> | number
    status?: BoolWithAggregatesFilter<"Product"> | boolean
    start_date?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ImageProductWhereInput = {
    AND?: ImageProductWhereInput | ImageProductWhereInput[]
    OR?: ImageProductWhereInput[]
    NOT?: ImageProductWhereInput | ImageProductWhereInput[]
    id?: IntFilter<"ImageProduct"> | number
    asset_id?: StringFilter<"ImageProduct"> | string
    public_id?: StringFilter<"ImageProduct"> | string
    url?: StringFilter<"ImageProduct"> | string
    secure_url?: StringFilter<"ImageProduct"> | string
    product_id?: IntFilter<"ImageProduct"> | number
    createdAt?: DateTimeFilter<"ImageProduct"> | Date | string
    updatedAt?: DateTimeFilter<"ImageProduct"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ImageProductOrderByWithRelationInput = {
    id?: SortOrder
    asset_id?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    product_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    _relevance?: ImageProductOrderByRelevanceInput
  }

  export type ImageProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageProductWhereInput | ImageProductWhereInput[]
    OR?: ImageProductWhereInput[]
    NOT?: ImageProductWhereInput | ImageProductWhereInput[]
    asset_id?: StringFilter<"ImageProduct"> | string
    public_id?: StringFilter<"ImageProduct"> | string
    url?: StringFilter<"ImageProduct"> | string
    secure_url?: StringFilter<"ImageProduct"> | string
    product_id?: IntFilter<"ImageProduct"> | number
    createdAt?: DateTimeFilter<"ImageProduct"> | Date | string
    updatedAt?: DateTimeFilter<"ImageProduct"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ImageProductOrderByWithAggregationInput = {
    id?: SortOrder
    asset_id?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    product_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageProductCountOrderByAggregateInput
    _avg?: ImageProductAvgOrderByAggregateInput
    _max?: ImageProductMaxOrderByAggregateInput
    _min?: ImageProductMinOrderByAggregateInput
    _sum?: ImageProductSumOrderByAggregateInput
  }

  export type ImageProductScalarWhereWithAggregatesInput = {
    AND?: ImageProductScalarWhereWithAggregatesInput | ImageProductScalarWhereWithAggregatesInput[]
    OR?: ImageProductScalarWhereWithAggregatesInput[]
    NOT?: ImageProductScalarWhereWithAggregatesInput | ImageProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ImageProduct"> | number
    asset_id?: StringWithAggregatesFilter<"ImageProduct"> | string
    public_id?: StringWithAggregatesFilter<"ImageProduct"> | string
    url?: StringWithAggregatesFilter<"ImageProduct"> | string
    secure_url?: StringWithAggregatesFilter<"ImageProduct"> | string
    product_id?: IntWithAggregatesFilter<"ImageProduct"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ImageProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ImageProduct"> | Date | string
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: IntFilter<"Cart"> | number
    product_id?: IntFilter<"Cart"> | number
    user_id?: IntFilter<"Cart"> | number
    final_price_product?: FloatFilter<"Cart"> | number
    dueDate?: DateTimeFilter<"Cart"> | Date | string
    cartprice?: FloatFilter<"Cart"> | number
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    final_price_product?: SortOrder
    dueDate?: SortOrder
    cartprice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    product_id?: number
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    user_id?: IntFilter<"Cart"> | number
    final_price_product?: FloatFilter<"Cart"> | number
    dueDate?: DateTimeFilter<"Cart"> | Date | string
    cartprice?: FloatFilter<"Cart"> | number
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "product_id">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    final_price_product?: SortOrder
    dueDate?: SortOrder
    cartprice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _avg?: CartAvgOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
    _sum?: CartSumOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cart"> | number
    product_id?: IntWithAggregatesFilter<"Cart"> | number
    user_id?: IntWithAggregatesFilter<"Cart"> | number
    final_price_product?: FloatWithAggregatesFilter<"Cart"> | number
    dueDate?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
    cartprice?: FloatWithAggregatesFilter<"Cart"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
  }

  export type Auctioneer_BoardWhereInput = {
    AND?: Auctioneer_BoardWhereInput | Auctioneer_BoardWhereInput[]
    OR?: Auctioneer_BoardWhereInput[]
    NOT?: Auctioneer_BoardWhereInput | Auctioneer_BoardWhereInput[]
    id?: IntFilter<"Auctioneer_Board"> | number
    user_id?: IntFilter<"Auctioneer_Board"> | number
    product_id?: IntFilter<"Auctioneer_Board"> | number
    price_offer?: FloatFilter<"Auctioneer_Board"> | number
    createdAt?: DateTimeFilter<"Auctioneer_Board"> | Date | string
    updatedAt?: DateTimeFilter<"Auctioneer_Board"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type Auctioneer_BoardOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    price_offer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type Auctioneer_BoardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Auctioneer_BoardWhereInput | Auctioneer_BoardWhereInput[]
    OR?: Auctioneer_BoardWhereInput[]
    NOT?: Auctioneer_BoardWhereInput | Auctioneer_BoardWhereInput[]
    user_id?: IntFilter<"Auctioneer_Board"> | number
    product_id?: IntFilter<"Auctioneer_Board"> | number
    price_offer?: FloatFilter<"Auctioneer_Board"> | number
    createdAt?: DateTimeFilter<"Auctioneer_Board"> | Date | string
    updatedAt?: DateTimeFilter<"Auctioneer_Board"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type Auctioneer_BoardOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    price_offer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Auctioneer_BoardCountOrderByAggregateInput
    _avg?: Auctioneer_BoardAvgOrderByAggregateInput
    _max?: Auctioneer_BoardMaxOrderByAggregateInput
    _min?: Auctioneer_BoardMinOrderByAggregateInput
    _sum?: Auctioneer_BoardSumOrderByAggregateInput
  }

  export type Auctioneer_BoardScalarWhereWithAggregatesInput = {
    AND?: Auctioneer_BoardScalarWhereWithAggregatesInput | Auctioneer_BoardScalarWhereWithAggregatesInput[]
    OR?: Auctioneer_BoardScalarWhereWithAggregatesInput[]
    NOT?: Auctioneer_BoardScalarWhereWithAggregatesInput | Auctioneer_BoardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Auctioneer_Board"> | number
    user_id?: IntWithAggregatesFilter<"Auctioneer_Board"> | number
    product_id?: IntWithAggregatesFilter<"Auctioneer_Board"> | number
    price_offer?: FloatWithAggregatesFilter<"Auctioneer_Board"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Auctioneer_Board"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Auctioneer_Board"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    user_id?: IntFilter<"Order"> | number
    total_price?: FloatFilter<"Order"> | number
    address?: StringFilter<"Order"> | string
    phone?: StringFilter<"Order"> | string
    orderStatus?: IntFilter<"Order"> | number
    paymentType?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    products?: ProductOnOrderListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    orderStatus?: SortOrder
    paymentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    products?: ProductOnOrderOrderByRelationAggregateInput
    _relevance?: OrderOrderByRelevanceInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    user_id?: IntFilter<"Order"> | number
    total_price?: FloatFilter<"Order"> | number
    address?: StringFilter<"Order"> | string
    phone?: StringFilter<"Order"> | string
    orderStatus?: IntFilter<"Order"> | number
    paymentType?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    products?: ProductOnOrderListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    orderStatus?: SortOrder
    paymentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    user_id?: IntWithAggregatesFilter<"Order"> | number
    total_price?: FloatWithAggregatesFilter<"Order"> | number
    address?: StringWithAggregatesFilter<"Order"> | string
    phone?: StringWithAggregatesFilter<"Order"> | string
    orderStatus?: IntWithAggregatesFilter<"Order"> | number
    paymentType?: IntWithAggregatesFilter<"Order"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type ProductOnOrderWhereInput = {
    AND?: ProductOnOrderWhereInput | ProductOnOrderWhereInput[]
    OR?: ProductOnOrderWhereInput[]
    NOT?: ProductOnOrderWhereInput | ProductOnOrderWhereInput[]
    id?: IntFilter<"ProductOnOrder"> | number
    order_id?: IntFilter<"ProductOnOrder"> | number
    product_id?: IntFilter<"ProductOnOrder"> | number
    final_price_product?: FloatFilter<"ProductOnOrder"> | number
    createdAt?: DateTimeFilter<"ProductOnOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ProductOnOrder"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductOnOrderOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    final_price_product?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ProductOnOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    product_id?: number
    AND?: ProductOnOrderWhereInput | ProductOnOrderWhereInput[]
    OR?: ProductOnOrderWhereInput[]
    NOT?: ProductOnOrderWhereInput | ProductOnOrderWhereInput[]
    order_id?: IntFilter<"ProductOnOrder"> | number
    final_price_product?: FloatFilter<"ProductOnOrder"> | number
    createdAt?: DateTimeFilter<"ProductOnOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ProductOnOrder"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "product_id">

  export type ProductOnOrderOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    final_price_product?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductOnOrderCountOrderByAggregateInput
    _avg?: ProductOnOrderAvgOrderByAggregateInput
    _max?: ProductOnOrderMaxOrderByAggregateInput
    _min?: ProductOnOrderMinOrderByAggregateInput
    _sum?: ProductOnOrderSumOrderByAggregateInput
  }

  export type ProductOnOrderScalarWhereWithAggregatesInput = {
    AND?: ProductOnOrderScalarWhereWithAggregatesInput | ProductOnOrderScalarWhereWithAggregatesInput[]
    OR?: ProductOnOrderScalarWhereWithAggregatesInput[]
    NOT?: ProductOnOrderScalarWhereWithAggregatesInput | ProductOnOrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductOnOrder"> | number
    order_id?: IntWithAggregatesFilter<"ProductOnOrder"> | number
    product_id?: IntWithAggregatesFilter<"ProductOnOrder"> | number
    final_price_product?: FloatWithAggregatesFilter<"ProductOnOrder"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProductOnOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductOnOrder"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password?: string | null
    name?: string | null
    picture?: string | null
    role?: number
    enabled?: boolean
    address?: string | null
    phone?: string | null
    type_account?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    carts?: CartCreateNestedManyWithoutUserInput
    auctioneerBoards?: Auctioneer_BoardCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password?: string | null
    name?: string | null
    picture?: string | null
    role?: number
    enabled?: boolean
    address?: string | null
    phone?: string | null
    type_account?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    carts?: CartUncheckedCreateNestedManyWithoutUserInput
    auctioneerBoards?: Auctioneer_BoardUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type_account?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUpdateManyWithoutUserNestedInput
    auctioneerBoards?: Auctioneer_BoardUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type_account?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUncheckedUpdateManyWithoutUserNestedInput
    auctioneerBoards?: Auctioneer_BoardUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password?: string | null
    name?: string | null
    picture?: string | null
    role?: number
    enabled?: boolean
    address?: string | null
    phone?: string | null
    type_account?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type_account?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type_account?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    name: string
    size: string
    description: string
    condition: number
    description_condition?: string | null
    starting_price: number
    min_bid_price: number
    status: boolean
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    images?: ImageProductCreateNestedManyWithoutProductInput
    carts?: CartCreateNestedManyWithoutProductInput
    auctioneerBoards?: Auctioneer_BoardCreateNestedManyWithoutProductInput
    productOnOrders?: ProductOnOrderCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    size: string
    description: string
    condition: number
    description_condition?: string | null
    starting_price: number
    min_bid_price: number
    category_id: number
    status: boolean
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageProductUncheckedCreateNestedManyWithoutProductInput
    carts?: CartUncheckedCreateNestedManyWithoutProductInput
    auctioneerBoards?: Auctioneer_BoardUncheckedCreateNestedManyWithoutProductInput
    productOnOrders?: ProductOnOrderUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: FloatFieldUpdateOperationsInput | number
    description_condition?: NullableStringFieldUpdateOperationsInput | string | null
    starting_price?: FloatFieldUpdateOperationsInput | number
    min_bid_price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    images?: ImageProductUpdateManyWithoutProductNestedInput
    carts?: CartUpdateManyWithoutProductNestedInput
    auctioneerBoards?: Auctioneer_BoardUpdateManyWithoutProductNestedInput
    productOnOrders?: ProductOnOrderUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: FloatFieldUpdateOperationsInput | number
    description_condition?: NullableStringFieldUpdateOperationsInput | string | null
    starting_price?: FloatFieldUpdateOperationsInput | number
    min_bid_price?: FloatFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageProductUncheckedUpdateManyWithoutProductNestedInput
    carts?: CartUncheckedUpdateManyWithoutProductNestedInput
    auctioneerBoards?: Auctioneer_BoardUncheckedUpdateManyWithoutProductNestedInput
    productOnOrders?: ProductOnOrderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    size: string
    description: string
    condition: number
    description_condition?: string | null
    starting_price: number
    min_bid_price: number
    category_id: number
    status: boolean
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: FloatFieldUpdateOperationsInput | number
    description_condition?: NullableStringFieldUpdateOperationsInput | string | null
    starting_price?: FloatFieldUpdateOperationsInput | number
    min_bid_price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: FloatFieldUpdateOperationsInput | number
    description_condition?: NullableStringFieldUpdateOperationsInput | string | null
    starting_price?: FloatFieldUpdateOperationsInput | number
    min_bid_price?: FloatFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageProductCreateInput = {
    asset_id: string
    public_id: string
    url: string
    secure_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutImagesInput
  }

  export type ImageProductUncheckedCreateInput = {
    id?: number
    asset_id: string
    public_id: string
    url: string
    secure_url: string
    product_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageProductUpdateInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secure_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    asset_id?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secure_url?: StringFieldUpdateOperationsInput | string
    product_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageProductCreateManyInput = {
    id?: number
    asset_id: string
    public_id: string
    url: string
    secure_url: string
    product_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageProductUpdateManyMutationInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secure_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    asset_id?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secure_url?: StringFieldUpdateOperationsInput | string
    product_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateInput = {
    final_price_product: number
    dueDate: Date | string
    cartprice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutCartsInput
    user: UserCreateNestedOneWithoutCartsInput
  }

  export type CartUncheckedCreateInput = {
    id?: number
    product_id: number
    user_id: number
    final_price_product: number
    dueDate: Date | string
    cartprice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartUpdateInput = {
    final_price_product?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cartprice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutCartsNestedInput
    user?: UserUpdateOneRequiredWithoutCartsNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    final_price_product?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cartprice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateManyInput = {
    id?: number
    product_id: number
    user_id: number
    final_price_product: number
    dueDate: Date | string
    cartprice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartUpdateManyMutationInput = {
    final_price_product?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cartprice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    final_price_product?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cartprice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Auctioneer_BoardCreateInput = {
    price_offer: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAuctioneerBoardsInput
    product: ProductCreateNestedOneWithoutAuctioneerBoardsInput
  }

  export type Auctioneer_BoardUncheckedCreateInput = {
    id?: number
    user_id: number
    product_id: number
    price_offer: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Auctioneer_BoardUpdateInput = {
    price_offer?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuctioneerBoardsNestedInput
    product?: ProductUpdateOneRequiredWithoutAuctioneerBoardsNestedInput
  }

  export type Auctioneer_BoardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    price_offer?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Auctioneer_BoardCreateManyInput = {
    id?: number
    user_id: number
    product_id: number
    price_offer: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Auctioneer_BoardUpdateManyMutationInput = {
    price_offer?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Auctioneer_BoardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    price_offer?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    total_price: number
    address: string
    phone: string
    orderStatus: number
    paymentType: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    products?: ProductOnOrderCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    user_id: number
    total_price: number
    address: string
    phone: string
    orderStatus: number
    paymentType: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductOnOrderUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    total_price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    paymentType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    products?: ProductOnOrderUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    paymentType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductOnOrderUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    user_id: number
    total_price: number
    address: string
    phone: string
    orderStatus: number
    paymentType: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    total_price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    paymentType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    paymentType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOnOrderCreateInput = {
    final_price_product: number
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutProductsInput
    product: ProductCreateNestedOneWithoutProductOnOrdersInput
  }

  export type ProductOnOrderUncheckedCreateInput = {
    id?: number
    order_id: number
    product_id: number
    final_price_product: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductOnOrderUpdateInput = {
    final_price_product?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutProductsNestedInput
    product?: ProductUpdateOneRequiredWithoutProductOnOrdersNestedInput
  }

  export type ProductOnOrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    final_price_product?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOnOrderCreateManyInput = {
    id?: number
    order_id: number
    product_id: number
    final_price_product: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductOnOrderUpdateManyMutationInput = {
    final_price_product?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOnOrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    final_price_product?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CartListRelationFilter = {
    every?: CartWhereInput
    some?: CartWhereInput
    none?: CartWhereInput
  }

  export type Auctioneer_BoardListRelationFilter = {
    every?: Auctioneer_BoardWhereInput
    some?: Auctioneer_BoardWhereInput
    none?: Auctioneer_BoardWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Auctioneer_BoardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    enabled?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    type_account?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    type_account?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    enabled?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    type_account?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    enabled?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    type_account?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    type_account?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ImageProductListRelationFilter = {
    every?: ImageProductWhereInput
    some?: ImageProductWhereInput
    none?: ImageProductWhereInput
  }

  export type ProductOnOrderListRelationFilter = {
    every?: ProductOnOrderWhereInput
    some?: ProductOnOrderWhereInput
    none?: ProductOnOrderWhereInput
  }

  export type ImageProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOnOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    description?: SortOrder
    condition?: SortOrder
    description_condition?: SortOrder
    starting_price?: SortOrder
    min_bid_price?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    condition?: SortOrder
    starting_price?: SortOrder
    min_bid_price?: SortOrder
    category_id?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    description?: SortOrder
    condition?: SortOrder
    description_condition?: SortOrder
    starting_price?: SortOrder
    min_bid_price?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    description?: SortOrder
    condition?: SortOrder
    description_condition?: SortOrder
    starting_price?: SortOrder
    min_bid_price?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    condition?: SortOrder
    starting_price?: SortOrder
    min_bid_price?: SortOrder
    category_id?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ImageProductOrderByRelevanceInput = {
    fields: ImageProductOrderByRelevanceFieldEnum | ImageProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImageProductCountOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    product_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageProductAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
  }

  export type ImageProductMaxOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    product_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageProductMinOrderByAggregateInput = {
    id?: SortOrder
    asset_id?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    product_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageProductSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    final_price_product?: SortOrder
    dueDate?: SortOrder
    cartprice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    final_price_product?: SortOrder
    cartprice?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    final_price_product?: SortOrder
    dueDate?: SortOrder
    cartprice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    final_price_product?: SortOrder
    dueDate?: SortOrder
    cartprice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    final_price_product?: SortOrder
    cartprice?: SortOrder
  }

  export type Auctioneer_BoardCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    price_offer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Auctioneer_BoardAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    price_offer?: SortOrder
  }

  export type Auctioneer_BoardMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    price_offer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Auctioneer_BoardMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    price_offer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Auctioneer_BoardSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    price_offer?: SortOrder
  }

  export type OrderOrderByRelevanceInput = {
    fields: OrderOrderByRelevanceFieldEnum | OrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    orderStatus?: SortOrder
    paymentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    orderStatus?: SortOrder
    paymentType?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    orderStatus?: SortOrder
    paymentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    orderStatus?: SortOrder
    paymentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_price?: SortOrder
    orderStatus?: SortOrder
    paymentType?: SortOrder
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type ProductOnOrderCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    final_price_product?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductOnOrderAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    final_price_product?: SortOrder
  }

  export type ProductOnOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    final_price_product?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductOnOrderMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    final_price_product?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductOnOrderSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    final_price_product?: SortOrder
  }

  export type CartCreateNestedManyWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type Auctioneer_BoardCreateNestedManyWithoutUserInput = {
    create?: XOR<Auctioneer_BoardCreateWithoutUserInput, Auctioneer_BoardUncheckedCreateWithoutUserInput> | Auctioneer_BoardCreateWithoutUserInput[] | Auctioneer_BoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Auctioneer_BoardCreateOrConnectWithoutUserInput | Auctioneer_BoardCreateOrConnectWithoutUserInput[]
    createMany?: Auctioneer_BoardCreateManyUserInputEnvelope
    connect?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type Auctioneer_BoardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Auctioneer_BoardCreateWithoutUserInput, Auctioneer_BoardUncheckedCreateWithoutUserInput> | Auctioneer_BoardCreateWithoutUserInput[] | Auctioneer_BoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Auctioneer_BoardCreateOrConnectWithoutUserInput | Auctioneer_BoardCreateOrConnectWithoutUserInput[]
    createMany?: Auctioneer_BoardCreateManyUserInputEnvelope
    connect?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CartUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutUserInput | CartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutUserInput | CartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartUpdateManyWithWhereWithoutUserInput | CartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type Auctioneer_BoardUpdateManyWithoutUserNestedInput = {
    create?: XOR<Auctioneer_BoardCreateWithoutUserInput, Auctioneer_BoardUncheckedCreateWithoutUserInput> | Auctioneer_BoardCreateWithoutUserInput[] | Auctioneer_BoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Auctioneer_BoardCreateOrConnectWithoutUserInput | Auctioneer_BoardCreateOrConnectWithoutUserInput[]
    upsert?: Auctioneer_BoardUpsertWithWhereUniqueWithoutUserInput | Auctioneer_BoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Auctioneer_BoardCreateManyUserInputEnvelope
    set?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
    disconnect?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
    delete?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
    connect?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
    update?: Auctioneer_BoardUpdateWithWhereUniqueWithoutUserInput | Auctioneer_BoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Auctioneer_BoardUpdateManyWithWhereWithoutUserInput | Auctioneer_BoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Auctioneer_BoardScalarWhereInput | Auctioneer_BoardScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CartUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput> | CartCreateWithoutUserInput[] | CartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartCreateOrConnectWithoutUserInput | CartCreateOrConnectWithoutUserInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutUserInput | CartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartCreateManyUserInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutUserInput | CartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartUpdateManyWithWhereWithoutUserInput | CartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type Auctioneer_BoardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Auctioneer_BoardCreateWithoutUserInput, Auctioneer_BoardUncheckedCreateWithoutUserInput> | Auctioneer_BoardCreateWithoutUserInput[] | Auctioneer_BoardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Auctioneer_BoardCreateOrConnectWithoutUserInput | Auctioneer_BoardCreateOrConnectWithoutUserInput[]
    upsert?: Auctioneer_BoardUpsertWithWhereUniqueWithoutUserInput | Auctioneer_BoardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Auctioneer_BoardCreateManyUserInputEnvelope
    set?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
    disconnect?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
    delete?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
    connect?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
    update?: Auctioneer_BoardUpdateWithWhereUniqueWithoutUserInput | Auctioneer_BoardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Auctioneer_BoardUpdateManyWithWhereWithoutUserInput | Auctioneer_BoardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Auctioneer_BoardScalarWhereInput | Auctioneer_BoardScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ImageProductCreateNestedManyWithoutProductInput = {
    create?: XOR<ImageProductCreateWithoutProductInput, ImageProductUncheckedCreateWithoutProductInput> | ImageProductCreateWithoutProductInput[] | ImageProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageProductCreateOrConnectWithoutProductInput | ImageProductCreateOrConnectWithoutProductInput[]
    createMany?: ImageProductCreateManyProductInputEnvelope
    connect?: ImageProductWhereUniqueInput | ImageProductWhereUniqueInput[]
  }

  export type CartCreateNestedManyWithoutProductInput = {
    create?: XOR<CartCreateWithoutProductInput, CartUncheckedCreateWithoutProductInput> | CartCreateWithoutProductInput[] | CartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartCreateOrConnectWithoutProductInput | CartCreateOrConnectWithoutProductInput[]
    createMany?: CartCreateManyProductInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type Auctioneer_BoardCreateNestedManyWithoutProductInput = {
    create?: XOR<Auctioneer_BoardCreateWithoutProductInput, Auctioneer_BoardUncheckedCreateWithoutProductInput> | Auctioneer_BoardCreateWithoutProductInput[] | Auctioneer_BoardUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Auctioneer_BoardCreateOrConnectWithoutProductInput | Auctioneer_BoardCreateOrConnectWithoutProductInput[]
    createMany?: Auctioneer_BoardCreateManyProductInputEnvelope
    connect?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
  }

  export type ProductOnOrderCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductOnOrderCreateWithoutProductInput, ProductOnOrderUncheckedCreateWithoutProductInput> | ProductOnOrderCreateWithoutProductInput[] | ProductOnOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductOnOrderCreateOrConnectWithoutProductInput | ProductOnOrderCreateOrConnectWithoutProductInput[]
    createMany?: ProductOnOrderCreateManyProductInputEnvelope
    connect?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
  }

  export type ImageProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ImageProductCreateWithoutProductInput, ImageProductUncheckedCreateWithoutProductInput> | ImageProductCreateWithoutProductInput[] | ImageProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageProductCreateOrConnectWithoutProductInput | ImageProductCreateOrConnectWithoutProductInput[]
    createMany?: ImageProductCreateManyProductInputEnvelope
    connect?: ImageProductWhereUniqueInput | ImageProductWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CartCreateWithoutProductInput, CartUncheckedCreateWithoutProductInput> | CartCreateWithoutProductInput[] | CartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartCreateOrConnectWithoutProductInput | CartCreateOrConnectWithoutProductInput[]
    createMany?: CartCreateManyProductInputEnvelope
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
  }

  export type Auctioneer_BoardUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Auctioneer_BoardCreateWithoutProductInput, Auctioneer_BoardUncheckedCreateWithoutProductInput> | Auctioneer_BoardCreateWithoutProductInput[] | Auctioneer_BoardUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Auctioneer_BoardCreateOrConnectWithoutProductInput | Auctioneer_BoardCreateOrConnectWithoutProductInput[]
    createMany?: Auctioneer_BoardCreateManyProductInputEnvelope
    connect?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
  }

  export type ProductOnOrderUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductOnOrderCreateWithoutProductInput, ProductOnOrderUncheckedCreateWithoutProductInput> | ProductOnOrderCreateWithoutProductInput[] | ProductOnOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductOnOrderCreateOrConnectWithoutProductInput | ProductOnOrderCreateOrConnectWithoutProductInput[]
    createMany?: ProductOnOrderCreateManyProductInputEnvelope
    connect?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ImageProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<ImageProductCreateWithoutProductInput, ImageProductUncheckedCreateWithoutProductInput> | ImageProductCreateWithoutProductInput[] | ImageProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageProductCreateOrConnectWithoutProductInput | ImageProductCreateOrConnectWithoutProductInput[]
    upsert?: ImageProductUpsertWithWhereUniqueWithoutProductInput | ImageProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ImageProductCreateManyProductInputEnvelope
    set?: ImageProductWhereUniqueInput | ImageProductWhereUniqueInput[]
    disconnect?: ImageProductWhereUniqueInput | ImageProductWhereUniqueInput[]
    delete?: ImageProductWhereUniqueInput | ImageProductWhereUniqueInput[]
    connect?: ImageProductWhereUniqueInput | ImageProductWhereUniqueInput[]
    update?: ImageProductUpdateWithWhereUniqueWithoutProductInput | ImageProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ImageProductUpdateManyWithWhereWithoutProductInput | ImageProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ImageProductScalarWhereInput | ImageProductScalarWhereInput[]
  }

  export type CartUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartCreateWithoutProductInput, CartUncheckedCreateWithoutProductInput> | CartCreateWithoutProductInput[] | CartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartCreateOrConnectWithoutProductInput | CartCreateOrConnectWithoutProductInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutProductInput | CartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartCreateManyProductInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutProductInput | CartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartUpdateManyWithWhereWithoutProductInput | CartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type Auctioneer_BoardUpdateManyWithoutProductNestedInput = {
    create?: XOR<Auctioneer_BoardCreateWithoutProductInput, Auctioneer_BoardUncheckedCreateWithoutProductInput> | Auctioneer_BoardCreateWithoutProductInput[] | Auctioneer_BoardUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Auctioneer_BoardCreateOrConnectWithoutProductInput | Auctioneer_BoardCreateOrConnectWithoutProductInput[]
    upsert?: Auctioneer_BoardUpsertWithWhereUniqueWithoutProductInput | Auctioneer_BoardUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: Auctioneer_BoardCreateManyProductInputEnvelope
    set?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
    disconnect?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
    delete?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
    connect?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
    update?: Auctioneer_BoardUpdateWithWhereUniqueWithoutProductInput | Auctioneer_BoardUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: Auctioneer_BoardUpdateManyWithWhereWithoutProductInput | Auctioneer_BoardUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: Auctioneer_BoardScalarWhereInput | Auctioneer_BoardScalarWhereInput[]
  }

  export type ProductOnOrderUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductOnOrderCreateWithoutProductInput, ProductOnOrderUncheckedCreateWithoutProductInput> | ProductOnOrderCreateWithoutProductInput[] | ProductOnOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductOnOrderCreateOrConnectWithoutProductInput | ProductOnOrderCreateOrConnectWithoutProductInput[]
    upsert?: ProductOnOrderUpsertWithWhereUniqueWithoutProductInput | ProductOnOrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductOnOrderCreateManyProductInputEnvelope
    set?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
    disconnect?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
    delete?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
    connect?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
    update?: ProductOnOrderUpdateWithWhereUniqueWithoutProductInput | ProductOnOrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductOnOrderUpdateManyWithWhereWithoutProductInput | ProductOnOrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductOnOrderScalarWhereInput | ProductOnOrderScalarWhereInput[]
  }

  export type ImageProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ImageProductCreateWithoutProductInput, ImageProductUncheckedCreateWithoutProductInput> | ImageProductCreateWithoutProductInput[] | ImageProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageProductCreateOrConnectWithoutProductInput | ImageProductCreateOrConnectWithoutProductInput[]
    upsert?: ImageProductUpsertWithWhereUniqueWithoutProductInput | ImageProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ImageProductCreateManyProductInputEnvelope
    set?: ImageProductWhereUniqueInput | ImageProductWhereUniqueInput[]
    disconnect?: ImageProductWhereUniqueInput | ImageProductWhereUniqueInput[]
    delete?: ImageProductWhereUniqueInput | ImageProductWhereUniqueInput[]
    connect?: ImageProductWhereUniqueInput | ImageProductWhereUniqueInput[]
    update?: ImageProductUpdateWithWhereUniqueWithoutProductInput | ImageProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ImageProductUpdateManyWithWhereWithoutProductInput | ImageProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ImageProductScalarWhereInput | ImageProductScalarWhereInput[]
  }

  export type CartUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartCreateWithoutProductInput, CartUncheckedCreateWithoutProductInput> | CartCreateWithoutProductInput[] | CartUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartCreateOrConnectWithoutProductInput | CartCreateOrConnectWithoutProductInput[]
    upsert?: CartUpsertWithWhereUniqueWithoutProductInput | CartUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartCreateManyProductInputEnvelope
    set?: CartWhereUniqueInput | CartWhereUniqueInput[]
    disconnect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    delete?: CartWhereUniqueInput | CartWhereUniqueInput[]
    connect?: CartWhereUniqueInput | CartWhereUniqueInput[]
    update?: CartUpdateWithWhereUniqueWithoutProductInput | CartUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartUpdateManyWithWhereWithoutProductInput | CartUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartScalarWhereInput | CartScalarWhereInput[]
  }

  export type Auctioneer_BoardUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Auctioneer_BoardCreateWithoutProductInput, Auctioneer_BoardUncheckedCreateWithoutProductInput> | Auctioneer_BoardCreateWithoutProductInput[] | Auctioneer_BoardUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Auctioneer_BoardCreateOrConnectWithoutProductInput | Auctioneer_BoardCreateOrConnectWithoutProductInput[]
    upsert?: Auctioneer_BoardUpsertWithWhereUniqueWithoutProductInput | Auctioneer_BoardUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: Auctioneer_BoardCreateManyProductInputEnvelope
    set?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
    disconnect?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
    delete?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
    connect?: Auctioneer_BoardWhereUniqueInput | Auctioneer_BoardWhereUniqueInput[]
    update?: Auctioneer_BoardUpdateWithWhereUniqueWithoutProductInput | Auctioneer_BoardUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: Auctioneer_BoardUpdateManyWithWhereWithoutProductInput | Auctioneer_BoardUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: Auctioneer_BoardScalarWhereInput | Auctioneer_BoardScalarWhereInput[]
  }

  export type ProductOnOrderUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductOnOrderCreateWithoutProductInput, ProductOnOrderUncheckedCreateWithoutProductInput> | ProductOnOrderCreateWithoutProductInput[] | ProductOnOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductOnOrderCreateOrConnectWithoutProductInput | ProductOnOrderCreateOrConnectWithoutProductInput[]
    upsert?: ProductOnOrderUpsertWithWhereUniqueWithoutProductInput | ProductOnOrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductOnOrderCreateManyProductInputEnvelope
    set?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
    disconnect?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
    delete?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
    connect?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
    update?: ProductOnOrderUpdateWithWhereUniqueWithoutProductInput | ProductOnOrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductOnOrderUpdateManyWithWhereWithoutProductInput | ProductOnOrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductOnOrderScalarWhereInput | ProductOnOrderScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    upsert?: ProductUpsertWithoutImagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutImagesInput, ProductUpdateWithoutImagesInput>, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductCreateNestedOneWithoutCartsInput = {
    create?: XOR<ProductCreateWithoutCartsInput, ProductUncheckedCreateWithoutCartsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCartsInput = {
    create?: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<ProductCreateWithoutCartsInput, ProductUncheckedCreateWithoutCartsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartsInput
    upsert?: ProductUpsertWithoutCartsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCartsInput, ProductUpdateWithoutCartsInput>, ProductUncheckedUpdateWithoutCartsInput>
  }

  export type UserUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartsInput
    upsert?: UserUpsertWithoutCartsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartsInput, UserUpdateWithoutCartsInput>, UserUncheckedUpdateWithoutCartsInput>
  }

  export type UserCreateNestedOneWithoutAuctioneerBoardsInput = {
    create?: XOR<UserCreateWithoutAuctioneerBoardsInput, UserUncheckedCreateWithoutAuctioneerBoardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuctioneerBoardsInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutAuctioneerBoardsInput = {
    create?: XOR<ProductCreateWithoutAuctioneerBoardsInput, ProductUncheckedCreateWithoutAuctioneerBoardsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAuctioneerBoardsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuctioneerBoardsNestedInput = {
    create?: XOR<UserCreateWithoutAuctioneerBoardsInput, UserUncheckedCreateWithoutAuctioneerBoardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuctioneerBoardsInput
    upsert?: UserUpsertWithoutAuctioneerBoardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuctioneerBoardsInput, UserUpdateWithoutAuctioneerBoardsInput>, UserUncheckedUpdateWithoutAuctioneerBoardsInput>
  }

  export type ProductUpdateOneRequiredWithoutAuctioneerBoardsNestedInput = {
    create?: XOR<ProductCreateWithoutAuctioneerBoardsInput, ProductUncheckedCreateWithoutAuctioneerBoardsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAuctioneerBoardsInput
    upsert?: ProductUpsertWithoutAuctioneerBoardsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutAuctioneerBoardsInput, ProductUpdateWithoutAuctioneerBoardsInput>, ProductUncheckedUpdateWithoutAuctioneerBoardsInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type ProductOnOrderCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProductOnOrderCreateWithoutOrderInput, ProductOnOrderUncheckedCreateWithoutOrderInput> | ProductOnOrderCreateWithoutOrderInput[] | ProductOnOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductOnOrderCreateOrConnectWithoutOrderInput | ProductOnOrderCreateOrConnectWithoutOrderInput[]
    createMany?: ProductOnOrderCreateManyOrderInputEnvelope
    connect?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
  }

  export type ProductOnOrderUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<ProductOnOrderCreateWithoutOrderInput, ProductOnOrderUncheckedCreateWithoutOrderInput> | ProductOnOrderCreateWithoutOrderInput[] | ProductOnOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductOnOrderCreateOrConnectWithoutOrderInput | ProductOnOrderCreateOrConnectWithoutOrderInput[]
    createMany?: ProductOnOrderCreateManyOrderInputEnvelope
    connect?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductOnOrderUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProductOnOrderCreateWithoutOrderInput, ProductOnOrderUncheckedCreateWithoutOrderInput> | ProductOnOrderCreateWithoutOrderInput[] | ProductOnOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductOnOrderCreateOrConnectWithoutOrderInput | ProductOnOrderCreateOrConnectWithoutOrderInput[]
    upsert?: ProductOnOrderUpsertWithWhereUniqueWithoutOrderInput | ProductOnOrderUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProductOnOrderCreateManyOrderInputEnvelope
    set?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
    disconnect?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
    delete?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
    connect?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
    update?: ProductOnOrderUpdateWithWhereUniqueWithoutOrderInput | ProductOnOrderUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProductOnOrderUpdateManyWithWhereWithoutOrderInput | ProductOnOrderUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProductOnOrderScalarWhereInput | ProductOnOrderScalarWhereInput[]
  }

  export type ProductOnOrderUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ProductOnOrderCreateWithoutOrderInput, ProductOnOrderUncheckedCreateWithoutOrderInput> | ProductOnOrderCreateWithoutOrderInput[] | ProductOnOrderUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ProductOnOrderCreateOrConnectWithoutOrderInput | ProductOnOrderCreateOrConnectWithoutOrderInput[]
    upsert?: ProductOnOrderUpsertWithWhereUniqueWithoutOrderInput | ProductOnOrderUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ProductOnOrderCreateManyOrderInputEnvelope
    set?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
    disconnect?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
    delete?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
    connect?: ProductOnOrderWhereUniqueInput | ProductOnOrderWhereUniqueInput[]
    update?: ProductOnOrderUpdateWithWhereUniqueWithoutOrderInput | ProductOnOrderUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ProductOnOrderUpdateManyWithWhereWithoutOrderInput | ProductOnOrderUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ProductOnOrderScalarWhereInput | ProductOnOrderScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutProductsInput = {
    create?: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutProductsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutProductOnOrdersInput = {
    create?: XOR<ProductCreateWithoutProductOnOrdersInput, ProductUncheckedCreateWithoutProductOnOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductOnOrdersInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutProductsInput
    upsert?: OrderUpsertWithoutProductsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutProductsInput, OrderUpdateWithoutProductsInput>, OrderUncheckedUpdateWithoutProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutProductOnOrdersNestedInput = {
    create?: XOR<ProductCreateWithoutProductOnOrdersInput, ProductUncheckedCreateWithoutProductOnOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductOnOrdersInput
    upsert?: ProductUpsertWithoutProductOnOrdersInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductOnOrdersInput, ProductUpdateWithoutProductOnOrdersInput>, ProductUncheckedUpdateWithoutProductOnOrdersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CartCreateWithoutUserInput = {
    final_price_product: number
    dueDate: Date | string
    cartprice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutCartsInput
  }

  export type CartUncheckedCreateWithoutUserInput = {
    id?: number
    product_id: number
    final_price_product: number
    dueDate: Date | string
    cartprice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartCreateOrConnectWithoutUserInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type CartCreateManyUserInputEnvelope = {
    data: CartCreateManyUserInput | CartCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Auctioneer_BoardCreateWithoutUserInput = {
    price_offer: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutAuctioneerBoardsInput
  }

  export type Auctioneer_BoardUncheckedCreateWithoutUserInput = {
    id?: number
    product_id: number
    price_offer: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Auctioneer_BoardCreateOrConnectWithoutUserInput = {
    where: Auctioneer_BoardWhereUniqueInput
    create: XOR<Auctioneer_BoardCreateWithoutUserInput, Auctioneer_BoardUncheckedCreateWithoutUserInput>
  }

  export type Auctioneer_BoardCreateManyUserInputEnvelope = {
    data: Auctioneer_BoardCreateManyUserInput | Auctioneer_BoardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    total_price: number
    address: string
    phone: string
    orderStatus: number
    paymentType: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductOnOrderCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    total_price: number
    address: string
    phone: string
    orderStatus: number
    paymentType: number
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductOnOrderUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CartUpsertWithWhereUniqueWithoutUserInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type CartUpdateWithWhereUniqueWithoutUserInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
  }

  export type CartUpdateManyWithWhereWithoutUserInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutUserInput>
  }

  export type CartScalarWhereInput = {
    AND?: CartScalarWhereInput | CartScalarWhereInput[]
    OR?: CartScalarWhereInput[]
    NOT?: CartScalarWhereInput | CartScalarWhereInput[]
    id?: IntFilter<"Cart"> | number
    product_id?: IntFilter<"Cart"> | number
    user_id?: IntFilter<"Cart"> | number
    final_price_product?: FloatFilter<"Cart"> | number
    dueDate?: DateTimeFilter<"Cart"> | Date | string
    cartprice?: FloatFilter<"Cart"> | number
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
  }

  export type Auctioneer_BoardUpsertWithWhereUniqueWithoutUserInput = {
    where: Auctioneer_BoardWhereUniqueInput
    update: XOR<Auctioneer_BoardUpdateWithoutUserInput, Auctioneer_BoardUncheckedUpdateWithoutUserInput>
    create: XOR<Auctioneer_BoardCreateWithoutUserInput, Auctioneer_BoardUncheckedCreateWithoutUserInput>
  }

  export type Auctioneer_BoardUpdateWithWhereUniqueWithoutUserInput = {
    where: Auctioneer_BoardWhereUniqueInput
    data: XOR<Auctioneer_BoardUpdateWithoutUserInput, Auctioneer_BoardUncheckedUpdateWithoutUserInput>
  }

  export type Auctioneer_BoardUpdateManyWithWhereWithoutUserInput = {
    where: Auctioneer_BoardScalarWhereInput
    data: XOR<Auctioneer_BoardUpdateManyMutationInput, Auctioneer_BoardUncheckedUpdateManyWithoutUserInput>
  }

  export type Auctioneer_BoardScalarWhereInput = {
    AND?: Auctioneer_BoardScalarWhereInput | Auctioneer_BoardScalarWhereInput[]
    OR?: Auctioneer_BoardScalarWhereInput[]
    NOT?: Auctioneer_BoardScalarWhereInput | Auctioneer_BoardScalarWhereInput[]
    id?: IntFilter<"Auctioneer_Board"> | number
    user_id?: IntFilter<"Auctioneer_Board"> | number
    product_id?: IntFilter<"Auctioneer_Board"> | number
    price_offer?: FloatFilter<"Auctioneer_Board"> | number
    createdAt?: DateTimeFilter<"Auctioneer_Board"> | Date | string
    updatedAt?: DateTimeFilter<"Auctioneer_Board"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    user_id?: IntFilter<"Order"> | number
    total_price?: FloatFilter<"Order"> | number
    address?: StringFilter<"Order"> | string
    phone?: StringFilter<"Order"> | string
    orderStatus?: IntFilter<"Order"> | number
    paymentType?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type ProductCreateWithoutCategoryInput = {
    name: string
    size: string
    description: string
    condition: number
    description_condition?: string | null
    starting_price: number
    min_bid_price: number
    status: boolean
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageProductCreateNestedManyWithoutProductInput
    carts?: CartCreateNestedManyWithoutProductInput
    auctioneerBoards?: Auctioneer_BoardCreateNestedManyWithoutProductInput
    productOnOrders?: ProductOnOrderCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    size: string
    description: string
    condition: number
    description_condition?: string | null
    starting_price: number
    min_bid_price: number
    status: boolean
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageProductUncheckedCreateNestedManyWithoutProductInput
    carts?: CartUncheckedCreateNestedManyWithoutProductInput
    auctioneerBoards?: Auctioneer_BoardUncheckedCreateNestedManyWithoutProductInput
    productOnOrders?: ProductOnOrderUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    size?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    condition?: FloatFilter<"Product"> | number
    description_condition?: StringNullableFilter<"Product"> | string | null
    starting_price?: FloatFilter<"Product"> | number
    min_bid_price?: FloatFilter<"Product"> | number
    category_id?: IntFilter<"Product"> | number
    status?: BoolFilter<"Product"> | boolean
    start_date?: DateTimeFilter<"Product"> | Date | string
    end_date?: DateTimeFilter<"Product"> | Date | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type CategoryCreateWithoutProductsInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ImageProductCreateWithoutProductInput = {
    asset_id: string
    public_id: string
    url: string
    secure_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageProductUncheckedCreateWithoutProductInput = {
    id?: number
    asset_id: string
    public_id: string
    url: string
    secure_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageProductCreateOrConnectWithoutProductInput = {
    where: ImageProductWhereUniqueInput
    create: XOR<ImageProductCreateWithoutProductInput, ImageProductUncheckedCreateWithoutProductInput>
  }

  export type ImageProductCreateManyProductInputEnvelope = {
    data: ImageProductCreateManyProductInput | ImageProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CartCreateWithoutProductInput = {
    final_price_product: number
    dueDate: Date | string
    cartprice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCartsInput
  }

  export type CartUncheckedCreateWithoutProductInput = {
    id?: number
    user_id: number
    final_price_product: number
    dueDate: Date | string
    cartprice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartCreateOrConnectWithoutProductInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutProductInput, CartUncheckedCreateWithoutProductInput>
  }

  export type CartCreateManyProductInputEnvelope = {
    data: CartCreateManyProductInput | CartCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type Auctioneer_BoardCreateWithoutProductInput = {
    price_offer: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAuctioneerBoardsInput
  }

  export type Auctioneer_BoardUncheckedCreateWithoutProductInput = {
    id?: number
    user_id: number
    price_offer: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Auctioneer_BoardCreateOrConnectWithoutProductInput = {
    where: Auctioneer_BoardWhereUniqueInput
    create: XOR<Auctioneer_BoardCreateWithoutProductInput, Auctioneer_BoardUncheckedCreateWithoutProductInput>
  }

  export type Auctioneer_BoardCreateManyProductInputEnvelope = {
    data: Auctioneer_BoardCreateManyProductInput | Auctioneer_BoardCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductOnOrderCreateWithoutProductInput = {
    final_price_product: number
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutProductsInput
  }

  export type ProductOnOrderUncheckedCreateWithoutProductInput = {
    id?: number
    order_id: number
    final_price_product: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductOnOrderCreateOrConnectWithoutProductInput = {
    where: ProductOnOrderWhereUniqueInput
    create: XOR<ProductOnOrderCreateWithoutProductInput, ProductOnOrderUncheckedCreateWithoutProductInput>
  }

  export type ProductOnOrderCreateManyProductInputEnvelope = {
    data: ProductOnOrderCreateManyProductInput | ProductOnOrderCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ImageProductUpsertWithWhereUniqueWithoutProductInput = {
    where: ImageProductWhereUniqueInput
    update: XOR<ImageProductUpdateWithoutProductInput, ImageProductUncheckedUpdateWithoutProductInput>
    create: XOR<ImageProductCreateWithoutProductInput, ImageProductUncheckedCreateWithoutProductInput>
  }

  export type ImageProductUpdateWithWhereUniqueWithoutProductInput = {
    where: ImageProductWhereUniqueInput
    data: XOR<ImageProductUpdateWithoutProductInput, ImageProductUncheckedUpdateWithoutProductInput>
  }

  export type ImageProductUpdateManyWithWhereWithoutProductInput = {
    where: ImageProductScalarWhereInput
    data: XOR<ImageProductUpdateManyMutationInput, ImageProductUncheckedUpdateManyWithoutProductInput>
  }

  export type ImageProductScalarWhereInput = {
    AND?: ImageProductScalarWhereInput | ImageProductScalarWhereInput[]
    OR?: ImageProductScalarWhereInput[]
    NOT?: ImageProductScalarWhereInput | ImageProductScalarWhereInput[]
    id?: IntFilter<"ImageProduct"> | number
    asset_id?: StringFilter<"ImageProduct"> | string
    public_id?: StringFilter<"ImageProduct"> | string
    url?: StringFilter<"ImageProduct"> | string
    secure_url?: StringFilter<"ImageProduct"> | string
    product_id?: IntFilter<"ImageProduct"> | number
    createdAt?: DateTimeFilter<"ImageProduct"> | Date | string
    updatedAt?: DateTimeFilter<"ImageProduct"> | Date | string
  }

  export type CartUpsertWithWhereUniqueWithoutProductInput = {
    where: CartWhereUniqueInput
    update: XOR<CartUpdateWithoutProductInput, CartUncheckedUpdateWithoutProductInput>
    create: XOR<CartCreateWithoutProductInput, CartUncheckedCreateWithoutProductInput>
  }

  export type CartUpdateWithWhereUniqueWithoutProductInput = {
    where: CartWhereUniqueInput
    data: XOR<CartUpdateWithoutProductInput, CartUncheckedUpdateWithoutProductInput>
  }

  export type CartUpdateManyWithWhereWithoutProductInput = {
    where: CartScalarWhereInput
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyWithoutProductInput>
  }

  export type Auctioneer_BoardUpsertWithWhereUniqueWithoutProductInput = {
    where: Auctioneer_BoardWhereUniqueInput
    update: XOR<Auctioneer_BoardUpdateWithoutProductInput, Auctioneer_BoardUncheckedUpdateWithoutProductInput>
    create: XOR<Auctioneer_BoardCreateWithoutProductInput, Auctioneer_BoardUncheckedCreateWithoutProductInput>
  }

  export type Auctioneer_BoardUpdateWithWhereUniqueWithoutProductInput = {
    where: Auctioneer_BoardWhereUniqueInput
    data: XOR<Auctioneer_BoardUpdateWithoutProductInput, Auctioneer_BoardUncheckedUpdateWithoutProductInput>
  }

  export type Auctioneer_BoardUpdateManyWithWhereWithoutProductInput = {
    where: Auctioneer_BoardScalarWhereInput
    data: XOR<Auctioneer_BoardUpdateManyMutationInput, Auctioneer_BoardUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductOnOrderUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductOnOrderWhereUniqueInput
    update: XOR<ProductOnOrderUpdateWithoutProductInput, ProductOnOrderUncheckedUpdateWithoutProductInput>
    create: XOR<ProductOnOrderCreateWithoutProductInput, ProductOnOrderUncheckedCreateWithoutProductInput>
  }

  export type ProductOnOrderUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductOnOrderWhereUniqueInput
    data: XOR<ProductOnOrderUpdateWithoutProductInput, ProductOnOrderUncheckedUpdateWithoutProductInput>
  }

  export type ProductOnOrderUpdateManyWithWhereWithoutProductInput = {
    where: ProductOnOrderScalarWhereInput
    data: XOR<ProductOnOrderUpdateManyMutationInput, ProductOnOrderUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductOnOrderScalarWhereInput = {
    AND?: ProductOnOrderScalarWhereInput | ProductOnOrderScalarWhereInput[]
    OR?: ProductOnOrderScalarWhereInput[]
    NOT?: ProductOnOrderScalarWhereInput | ProductOnOrderScalarWhereInput[]
    id?: IntFilter<"ProductOnOrder"> | number
    order_id?: IntFilter<"ProductOnOrder"> | number
    product_id?: IntFilter<"ProductOnOrder"> | number
    final_price_product?: FloatFilter<"ProductOnOrder"> | number
    createdAt?: DateTimeFilter<"ProductOnOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ProductOnOrder"> | Date | string
  }

  export type ProductCreateWithoutImagesInput = {
    name: string
    size: string
    description: string
    condition: number
    description_condition?: string | null
    starting_price: number
    min_bid_price: number
    status: boolean
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    carts?: CartCreateNestedManyWithoutProductInput
    auctioneerBoards?: Auctioneer_BoardCreateNestedManyWithoutProductInput
    productOnOrders?: ProductOnOrderCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    size: string
    description: string
    condition: number
    description_condition?: string | null
    starting_price: number
    min_bid_price: number
    category_id: number
    status: boolean
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    carts?: CartUncheckedCreateNestedManyWithoutProductInput
    auctioneerBoards?: Auctioneer_BoardUncheckedCreateNestedManyWithoutProductInput
    productOnOrders?: ProductOnOrderUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
  }

  export type ProductUpsertWithoutImagesInput = {
    update: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: FloatFieldUpdateOperationsInput | number
    description_condition?: NullableStringFieldUpdateOperationsInput | string | null
    starting_price?: FloatFieldUpdateOperationsInput | number
    min_bid_price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    carts?: CartUpdateManyWithoutProductNestedInput
    auctioneerBoards?: Auctioneer_BoardUpdateManyWithoutProductNestedInput
    productOnOrders?: ProductOnOrderUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: FloatFieldUpdateOperationsInput | number
    description_condition?: NullableStringFieldUpdateOperationsInput | string | null
    starting_price?: FloatFieldUpdateOperationsInput | number
    min_bid_price?: FloatFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUncheckedUpdateManyWithoutProductNestedInput
    auctioneerBoards?: Auctioneer_BoardUncheckedUpdateManyWithoutProductNestedInput
    productOnOrders?: ProductOnOrderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutCartsInput = {
    name: string
    size: string
    description: string
    condition: number
    description_condition?: string | null
    starting_price: number
    min_bid_price: number
    status: boolean
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    images?: ImageProductCreateNestedManyWithoutProductInput
    auctioneerBoards?: Auctioneer_BoardCreateNestedManyWithoutProductInput
    productOnOrders?: ProductOnOrderCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCartsInput = {
    id?: number
    name: string
    size: string
    description: string
    condition: number
    description_condition?: string | null
    starting_price: number
    min_bid_price: number
    category_id: number
    status: boolean
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageProductUncheckedCreateNestedManyWithoutProductInput
    auctioneerBoards?: Auctioneer_BoardUncheckedCreateNestedManyWithoutProductInput
    productOnOrders?: ProductOnOrderUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCartsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCartsInput, ProductUncheckedCreateWithoutCartsInput>
  }

  export type UserCreateWithoutCartsInput = {
    email: string
    password?: string | null
    name?: string | null
    picture?: string | null
    role?: number
    enabled?: boolean
    address?: string | null
    phone?: string | null
    type_account?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    auctioneerBoards?: Auctioneer_BoardCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartsInput = {
    id?: number
    email: string
    password?: string | null
    name?: string | null
    picture?: string | null
    role?: number
    enabled?: boolean
    address?: string | null
    phone?: string | null
    type_account?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    auctioneerBoards?: Auctioneer_BoardUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
  }

  export type ProductUpsertWithoutCartsInput = {
    update: XOR<ProductUpdateWithoutCartsInput, ProductUncheckedUpdateWithoutCartsInput>
    create: XOR<ProductCreateWithoutCartsInput, ProductUncheckedCreateWithoutCartsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCartsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCartsInput, ProductUncheckedUpdateWithoutCartsInput>
  }

  export type ProductUpdateWithoutCartsInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: FloatFieldUpdateOperationsInput | number
    description_condition?: NullableStringFieldUpdateOperationsInput | string | null
    starting_price?: FloatFieldUpdateOperationsInput | number
    min_bid_price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    images?: ImageProductUpdateManyWithoutProductNestedInput
    auctioneerBoards?: Auctioneer_BoardUpdateManyWithoutProductNestedInput
    productOnOrders?: ProductOnOrderUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: FloatFieldUpdateOperationsInput | number
    description_condition?: NullableStringFieldUpdateOperationsInput | string | null
    starting_price?: FloatFieldUpdateOperationsInput | number
    min_bid_price?: FloatFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageProductUncheckedUpdateManyWithoutProductNestedInput
    auctioneerBoards?: Auctioneer_BoardUncheckedUpdateManyWithoutProductNestedInput
    productOnOrders?: ProductOnOrderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutCartsInput = {
    update: XOR<UserUpdateWithoutCartsInput, UserUncheckedUpdateWithoutCartsInput>
    create: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartsInput, UserUncheckedUpdateWithoutCartsInput>
  }

  export type UserUpdateWithoutCartsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type_account?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auctioneerBoards?: Auctioneer_BoardUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type_account?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auctioneerBoards?: Auctioneer_BoardUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuctioneerBoardsInput = {
    email: string
    password?: string | null
    name?: string | null
    picture?: string | null
    role?: number
    enabled?: boolean
    address?: string | null
    phone?: string | null
    type_account?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    carts?: CartCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuctioneerBoardsInput = {
    id?: number
    email: string
    password?: string | null
    name?: string | null
    picture?: string | null
    role?: number
    enabled?: boolean
    address?: string | null
    phone?: string | null
    type_account?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    carts?: CartUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuctioneerBoardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuctioneerBoardsInput, UserUncheckedCreateWithoutAuctioneerBoardsInput>
  }

  export type ProductCreateWithoutAuctioneerBoardsInput = {
    name: string
    size: string
    description: string
    condition: number
    description_condition?: string | null
    starting_price: number
    min_bid_price: number
    status: boolean
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    images?: ImageProductCreateNestedManyWithoutProductInput
    carts?: CartCreateNestedManyWithoutProductInput
    productOnOrders?: ProductOnOrderCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutAuctioneerBoardsInput = {
    id?: number
    name: string
    size: string
    description: string
    condition: number
    description_condition?: string | null
    starting_price: number
    min_bid_price: number
    category_id: number
    status: boolean
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageProductUncheckedCreateNestedManyWithoutProductInput
    carts?: CartUncheckedCreateNestedManyWithoutProductInput
    productOnOrders?: ProductOnOrderUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutAuctioneerBoardsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutAuctioneerBoardsInput, ProductUncheckedCreateWithoutAuctioneerBoardsInput>
  }

  export type UserUpsertWithoutAuctioneerBoardsInput = {
    update: XOR<UserUpdateWithoutAuctioneerBoardsInput, UserUncheckedUpdateWithoutAuctioneerBoardsInput>
    create: XOR<UserCreateWithoutAuctioneerBoardsInput, UserUncheckedCreateWithoutAuctioneerBoardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuctioneerBoardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuctioneerBoardsInput, UserUncheckedUpdateWithoutAuctioneerBoardsInput>
  }

  export type UserUpdateWithoutAuctioneerBoardsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type_account?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuctioneerBoardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type_account?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutAuctioneerBoardsInput = {
    update: XOR<ProductUpdateWithoutAuctioneerBoardsInput, ProductUncheckedUpdateWithoutAuctioneerBoardsInput>
    create: XOR<ProductCreateWithoutAuctioneerBoardsInput, ProductUncheckedCreateWithoutAuctioneerBoardsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutAuctioneerBoardsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutAuctioneerBoardsInput, ProductUncheckedUpdateWithoutAuctioneerBoardsInput>
  }

  export type ProductUpdateWithoutAuctioneerBoardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: FloatFieldUpdateOperationsInput | number
    description_condition?: NullableStringFieldUpdateOperationsInput | string | null
    starting_price?: FloatFieldUpdateOperationsInput | number
    min_bid_price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    images?: ImageProductUpdateManyWithoutProductNestedInput
    carts?: CartUpdateManyWithoutProductNestedInput
    productOnOrders?: ProductOnOrderUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutAuctioneerBoardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: FloatFieldUpdateOperationsInput | number
    description_condition?: NullableStringFieldUpdateOperationsInput | string | null
    starting_price?: FloatFieldUpdateOperationsInput | number
    min_bid_price?: FloatFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageProductUncheckedUpdateManyWithoutProductNestedInput
    carts?: CartUncheckedUpdateManyWithoutProductNestedInput
    productOnOrders?: ProductOnOrderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    email: string
    password?: string | null
    name?: string | null
    picture?: string | null
    role?: number
    enabled?: boolean
    address?: string | null
    phone?: string | null
    type_account?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    carts?: CartCreateNestedManyWithoutUserInput
    auctioneerBoards?: Auctioneer_BoardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    email: string
    password?: string | null
    name?: string | null
    picture?: string | null
    role?: number
    enabled?: boolean
    address?: string | null
    phone?: string | null
    type_account?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    carts?: CartUncheckedCreateNestedManyWithoutUserInput
    auctioneerBoards?: Auctioneer_BoardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type ProductOnOrderCreateWithoutOrderInput = {
    final_price_product: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutProductOnOrdersInput
  }

  export type ProductOnOrderUncheckedCreateWithoutOrderInput = {
    id?: number
    product_id: number
    final_price_product: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductOnOrderCreateOrConnectWithoutOrderInput = {
    where: ProductOnOrderWhereUniqueInput
    create: XOR<ProductOnOrderCreateWithoutOrderInput, ProductOnOrderUncheckedCreateWithoutOrderInput>
  }

  export type ProductOnOrderCreateManyOrderInputEnvelope = {
    data: ProductOnOrderCreateManyOrderInput | ProductOnOrderCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type_account?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUpdateManyWithoutUserNestedInput
    auctioneerBoards?: Auctioneer_BoardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: IntFieldUpdateOperationsInput | number
    enabled?: BoolFieldUpdateOperationsInput | boolean
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    type_account?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carts?: CartUncheckedUpdateManyWithoutUserNestedInput
    auctioneerBoards?: Auctioneer_BoardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductOnOrderUpsertWithWhereUniqueWithoutOrderInput = {
    where: ProductOnOrderWhereUniqueInput
    update: XOR<ProductOnOrderUpdateWithoutOrderInput, ProductOnOrderUncheckedUpdateWithoutOrderInput>
    create: XOR<ProductOnOrderCreateWithoutOrderInput, ProductOnOrderUncheckedCreateWithoutOrderInput>
  }

  export type ProductOnOrderUpdateWithWhereUniqueWithoutOrderInput = {
    where: ProductOnOrderWhereUniqueInput
    data: XOR<ProductOnOrderUpdateWithoutOrderInput, ProductOnOrderUncheckedUpdateWithoutOrderInput>
  }

  export type ProductOnOrderUpdateManyWithWhereWithoutOrderInput = {
    where: ProductOnOrderScalarWhereInput
    data: XOR<ProductOnOrderUpdateManyMutationInput, ProductOnOrderUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutProductsInput = {
    total_price: number
    address: string
    phone: string
    orderStatus: number
    paymentType: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutProductsInput = {
    id?: number
    user_id: number
    total_price: number
    address: string
    phone: string
    orderStatus: number
    paymentType: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutProductsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
  }

  export type ProductCreateWithoutProductOnOrdersInput = {
    name: string
    size: string
    description: string
    condition: number
    description_condition?: string | null
    starting_price: number
    min_bid_price: number
    status: boolean
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    images?: ImageProductCreateNestedManyWithoutProductInput
    carts?: CartCreateNestedManyWithoutProductInput
    auctioneerBoards?: Auctioneer_BoardCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductOnOrdersInput = {
    id?: number
    name: string
    size: string
    description: string
    condition: number
    description_condition?: string | null
    starting_price: number
    min_bid_price: number
    category_id: number
    status: boolean
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageProductUncheckedCreateNestedManyWithoutProductInput
    carts?: CartUncheckedCreateNestedManyWithoutProductInput
    auctioneerBoards?: Auctioneer_BoardUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductOnOrdersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductOnOrdersInput, ProductUncheckedCreateWithoutProductOnOrdersInput>
  }

  export type OrderUpsertWithoutProductsInput = {
    update: XOR<OrderUpdateWithoutProductsInput, OrderUncheckedUpdateWithoutProductsInput>
    create: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutProductsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutProductsInput, OrderUncheckedUpdateWithoutProductsInput>
  }

  export type OrderUpdateWithoutProductsInput = {
    total_price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    paymentType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    paymentType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutProductOnOrdersInput = {
    update: XOR<ProductUpdateWithoutProductOnOrdersInput, ProductUncheckedUpdateWithoutProductOnOrdersInput>
    create: XOR<ProductCreateWithoutProductOnOrdersInput, ProductUncheckedCreateWithoutProductOnOrdersInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductOnOrdersInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductOnOrdersInput, ProductUncheckedUpdateWithoutProductOnOrdersInput>
  }

  export type ProductUpdateWithoutProductOnOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: FloatFieldUpdateOperationsInput | number
    description_condition?: NullableStringFieldUpdateOperationsInput | string | null
    starting_price?: FloatFieldUpdateOperationsInput | number
    min_bid_price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    images?: ImageProductUpdateManyWithoutProductNestedInput
    carts?: CartUpdateManyWithoutProductNestedInput
    auctioneerBoards?: Auctioneer_BoardUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductOnOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: FloatFieldUpdateOperationsInput | number
    description_condition?: NullableStringFieldUpdateOperationsInput | string | null
    starting_price?: FloatFieldUpdateOperationsInput | number
    min_bid_price?: FloatFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageProductUncheckedUpdateManyWithoutProductNestedInput
    carts?: CartUncheckedUpdateManyWithoutProductNestedInput
    auctioneerBoards?: Auctioneer_BoardUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CartCreateManyUserInput = {
    id?: number
    product_id: number
    final_price_product: number
    dueDate: Date | string
    cartprice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Auctioneer_BoardCreateManyUserInput = {
    id?: number
    product_id: number
    price_offer: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: number
    total_price: number
    address: string
    phone: string
    orderStatus: number
    paymentType: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartUpdateWithoutUserInput = {
    final_price_product?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cartprice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutCartsNestedInput
  }

  export type CartUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    final_price_product?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cartprice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    final_price_product?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cartprice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Auctioneer_BoardUpdateWithoutUserInput = {
    price_offer?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutAuctioneerBoardsNestedInput
  }

  export type Auctioneer_BoardUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    price_offer?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Auctioneer_BoardUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    price_offer?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    total_price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    paymentType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductOnOrderUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    paymentType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductOnOrderUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_price?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    orderStatus?: IntFieldUpdateOperationsInput | number
    paymentType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    name: string
    size: string
    description: string
    condition: number
    description_condition?: string | null
    starting_price: number
    min_bid_price: number
    status: boolean
    start_date: Date | string
    end_date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: FloatFieldUpdateOperationsInput | number
    description_condition?: NullableStringFieldUpdateOperationsInput | string | null
    starting_price?: FloatFieldUpdateOperationsInput | number
    min_bid_price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageProductUpdateManyWithoutProductNestedInput
    carts?: CartUpdateManyWithoutProductNestedInput
    auctioneerBoards?: Auctioneer_BoardUpdateManyWithoutProductNestedInput
    productOnOrders?: ProductOnOrderUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: FloatFieldUpdateOperationsInput | number
    description_condition?: NullableStringFieldUpdateOperationsInput | string | null
    starting_price?: FloatFieldUpdateOperationsInput | number
    min_bid_price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageProductUncheckedUpdateManyWithoutProductNestedInput
    carts?: CartUncheckedUpdateManyWithoutProductNestedInput
    auctioneerBoards?: Auctioneer_BoardUncheckedUpdateManyWithoutProductNestedInput
    productOnOrders?: ProductOnOrderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    condition?: FloatFieldUpdateOperationsInput | number
    description_condition?: NullableStringFieldUpdateOperationsInput | string | null
    starting_price?: FloatFieldUpdateOperationsInput | number
    min_bid_price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageProductCreateManyProductInput = {
    id?: number
    asset_id: string
    public_id: string
    url: string
    secure_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartCreateManyProductInput = {
    id?: number
    user_id: number
    final_price_product: number
    dueDate: Date | string
    cartprice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Auctioneer_BoardCreateManyProductInput = {
    id?: number
    user_id: number
    price_offer: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductOnOrderCreateManyProductInput = {
    id?: number
    order_id: number
    final_price_product: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageProductUpdateWithoutProductInput = {
    asset_id?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secure_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageProductUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    asset_id?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secure_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageProductUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    asset_id?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secure_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUpdateWithoutProductInput = {
    final_price_product?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cartprice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCartsNestedInput
  }

  export type CartUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    final_price_product?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cartprice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    final_price_product?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cartprice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Auctioneer_BoardUpdateWithoutProductInput = {
    price_offer?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuctioneerBoardsNestedInput
  }

  export type Auctioneer_BoardUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    price_offer?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Auctioneer_BoardUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    price_offer?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOnOrderUpdateWithoutProductInput = {
    final_price_product?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductOnOrderUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    final_price_product?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOnOrderUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    final_price_product?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOnOrderCreateManyOrderInput = {
    id?: number
    product_id: number
    final_price_product: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductOnOrderUpdateWithoutOrderInput = {
    final_price_product?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutProductOnOrdersNestedInput
  }

  export type ProductOnOrderUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    final_price_product?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductOnOrderUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    final_price_product?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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