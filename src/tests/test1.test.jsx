import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import '@testing-library/jest-dom';
import App from "../App";


test('Render 1', ()=>{
    render(<App/>);
    const elem = screen.getByRole('heading');
    screen.queryAllByAltText
    expect(elem).toBeVisible();
    expect(elem).toHaveTextContent(/Welcome/)

    expect(screen.getByRole('list')).toBeVisible();
    const elems = screen.getAllByRole('listitem');
    expect(elems.length).toBe(3);

    for (const e of elems) {
        expect(e.textContent.length).toBeGreaterThan(0);
    }
    
})
