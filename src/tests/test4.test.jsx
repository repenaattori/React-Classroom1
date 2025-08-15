import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import '@testing-library/jest-dom';
import App, { Message, Sum } from "../App";


test('Calculate sum', ()=>{
    render(<Sum x={2} y={2}/>);
    render(<Sum x={5} y={4}/>);
    render(<Sum x={20} y={32}/>);

    const elems = screen.getAllByTestId('res');

    expect(elems[0]).toHaveTextContent('4');
    expect(elems[1]).toHaveTextContent('9');
    expect(elems[2]).toHaveTextContent('52');
   
});

test('Use sum in the main component.', ()=>{
    render(<App/>);

    const elems = screen.getAllByTestId('res');

    expect(elems[0].textContent.length).greaterThan(0);
    expect(elems[1].textContent.length).greaterThan(0);
    expect(elems[0].textContent).not.toMatch(elems[1].textContent);
});