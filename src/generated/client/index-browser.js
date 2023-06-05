
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.15.0
 * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
 */
Prisma.prismaVersion = {
  client: "4.15.0",
  engine: "8fbc245156db7124f997f4cecdd8d1219e360944"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.Addon_categoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  is_required: 'is_required'
};

exports.Prisma.AddonsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  addon_categories_id: 'addon_categories_id'
};

exports.Prisma.BranchesScalarFieldEnum = {
  id: 'id',
  township_id: 'township_id',
  company_id: 'company_id',
  address: 'address'
};

exports.Prisma.Branches_addonsScalarFieldEnum = {
  id: 'id',
  addon_id: 'addon_id',
  branch_id: 'branch_id',
  is_available: 'is_available'
};

exports.Prisma.Branches_menucategories_menusScalarFieldEnum = {
  id: 'id',
  menu_id: 'menu_id',
  branch_id: 'branch_id',
  menucategory_id: 'menucategory_id',
  is_available: 'is_available'
};

exports.Prisma.CompaniesScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.Menu_addonsScalarFieldEnum = {
  id: 'id',
  menu_id: 'menu_id',
  addon_id: 'addon_id',
  price: 'price'
};

exports.Prisma.Menu_categoriesScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.MenusScalarFieldEnum = {
  id: 'id',
  name: 'name',
  price: 'price',
  asset_url: 'asset_url',
  description: 'description'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TownshipsScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  company_id: 'company_id',
  role: 'role'
};
exports.Role = {
  admin: 'admin',
  manager: 'manager'
};

exports.Prisma.ModelName = {
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

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
