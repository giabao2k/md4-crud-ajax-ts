"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_route_1 = require("./product-route");
exports.router = (0, express_1.Router)();
exports.router.use('/products', product_route_1.productRouter);
//# sourceMappingURL=route.js.map