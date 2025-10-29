import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";
describe('TEST APP.JSX', ()=>{
    it('must render', ()=>{
        render(<App/>);
        const text = screen.getByText('Login');
        expect(text).toBeInTheDocument();
    });
})