var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import './myLabel.css';
/**
 * Primary UI component for user interaction
 */
export var MyLabel = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'No label' : _b, _c = _a.allCaps, allCaps = _c === void 0 ? false : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d, fontColor = _a.fontColor, _e = _a.backgroundColor, backgroundColor = _e === void 0 ? 'transparent' : _e, _f = _a.size, size = _f === void 0 ? 'normal' : _f;
    return (_jsx("span", __assign({ className: "label ".concat(size, " text-").concat(color), style: { color: fontColor, backgroundColor: backgroundColor } }, { children: allCaps ? label.toUpperCase() : label })));
};
