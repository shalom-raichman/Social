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
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            err: false,
            message: "I was way to lazy to change the defult message",
            data: undefined
        });
    }
    catch (err) {
        res.status(400);
        res.json({
            err: true,
            message: "I was way to lazy to change the defult message",
            data: null
        });
    }
}));
// protected rout
router.post("/follow", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            err: false,
            message: "I was way to lazy to change the defult message",
            data: undefined
        });
    }
    catch (err) {
        res.status(400);
        res.json({
            err: true,
            message: "I was way to lazy to change the defult message",
            data: null
        });
    }
}));
// query params: ?x=value|ELSE
router.get("/search", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            err: false,
            message: "I was way to lazy to change the defult message",
            data: undefined
        });
    }
    catch (err) {
        res.status(400);
        res.json({
            err: true,
            message: "I was way to lazy to change the defult message",
            data: null
        });
    }
}));
// protected rout
// query params: ?type=MINE|ELSE
router.get("/profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            err: false,
            message: "I was way to lazy to change the defult message",
            data: undefined
        });
    }
    catch (err) {
        res.status(400);
        res.json({
            err: true,
            message: "I was way to lazy to change the defult message",
            data: null
        });
    }
}));
// query params: ?type=MINE|ELSE
router.get("/followers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            err: false,
            message: "I was way to lazy to change the defult message",
            data: undefined
        });
    }
    catch (err) {
        res.status(400);
        res.json({
            err: true,
            message: "I was way to lazy to change the defult message",
            data: null
        });
    }
}));
// query params: ?type=MINE|ELSE
router.get("/following", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            err: false,
            message: "I was way to lazy to change the defult message",
            data: undefined
        });
    }
    catch (err) {
        res.status(400);
        res.json({
            err: true,
            message: "I was way to lazy to change the defult message",
            data: null
        });
    }
}));
exports.default = router;
