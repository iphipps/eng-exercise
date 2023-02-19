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
exports.getStaticProps = exports.getStaticPaths = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const layout_1 = __importDefault(require("../../components/layout"));
const tickets_1 = require("../../lib/tickets");
const head_1 = __importDefault(require("next/head"));
const date_1 = __importDefault(require("../../components/date"));
const utils_module_css_1 = __importDefault(require("../../styles/utils.module.css"));
function Ticket({ ticket }) {
    return ((0, jsx_runtime_1.jsxs)(layout_1.default, { children: [(0, jsx_runtime_1.jsx)(head_1.default, { children: (0, jsx_runtime_1.jsx)("title", { children: ticket.title }) }), (0, jsx_runtime_1.jsxs)("article", { children: [(0, jsx_runtime_1.jsx)("h1", Object.assign({ className: utils_module_css_1.default.headingXl }, { children: ticket.title })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: utils_module_css_1.default.lightText }, { children: (0, jsx_runtime_1.jsx)(date_1.default, { dateString: ticket.date }) })), (0, jsx_runtime_1.jsx)("div", { dangerouslySetInnerHTML: { __html: ticket.contentHtml } })] })] }));
}
exports.default = Ticket;
const getStaticPaths = () => __awaiter(void 0, void 0, void 0, function* () {
    const paths = (0, tickets_1.getAllTicketIds)();
    return {
        paths,
        fallback: false,
    };
});
exports.getStaticPaths = getStaticPaths;
const getStaticProps = ({ params }) => __awaiter(void 0, void 0, void 0, function* () {
    const ticket = yield (0, tickets_1.getTicketData)(params === null || params === void 0 ? void 0 : params.id);
    return {
        props: {
            ticket,
        },
    };
});
exports.getStaticProps = getStaticProps;
