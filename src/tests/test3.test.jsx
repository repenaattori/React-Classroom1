import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import '@testing-library/jest-dom';
import App, { Message } from "../App";


test('Message props component test', ()=>{
    render(<Message msg={'Coding is easy'}/>);
    render(<Message msg={'React uses jsx'}/>);
    render(<Message msg={'Dynamic web development'}/>);
    
    let elems = screen.getAllByRole('paragraph');
    expect(elems[0]).toBeVisible();
    expect(elems[0]).toHaveTextContent(/Coding/);
    expect(elems[1]).toBeVisible();
    expect(elems[1]).toHaveTextContent(/jsx/);
    expect(elems[2]).toBeVisible();
    expect(elems[2]).toHaveTextContent(/Dynamic/);
});

test('Message component usage', ()=>{
    render(<App/>);
    
    let elems = screen.getAllByRole('paragraph');
    expect(elems[0]).toBeVisible();
    expect(elems[0].textContent.length).toBeGreaterThan(0);
    expect(elems[1]).toBeVisible();
    expect(elems[1].textContent.length).toBeGreaterThan(0);

})

