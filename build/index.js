"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./services/server"));
const config_1 = __importDefault(require("./helpers/config"));
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    server_1.default.listen(config_1.default.PORT, () => {
        console.info(`Worker started under ${config_1.default.NODE_ENV} environment`);
        console.info(`Running on Port ${config_1.default.PORT}`);
    });
});
start();
//# sourceMappingURL=index.js.map