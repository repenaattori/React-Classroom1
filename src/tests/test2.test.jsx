import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import '@testing-library/jest-dom';
import App, { Form } from "../App";


test('Form component test', ()=>{
    render(<Form/>);
    
    let elem = screen.getByRole('button');
    expect(elem).toBeVisible();
    expect(elem).toHaveTextContent(/OK/);

    elem = screen.getByRole('textbox');
    expect(elem).toBeVisible();
})

test('Form added', ()=>{
    render(<App/>);
    
    let elem = screen.getByRole('button');
    expect(elem).toBeVisible();
    expect(elem).toHaveTextContent(/OK/);
    elem = screen.getByRole('textbox');
    expect(elem).toBeVisible();
})