import {describe, it, expect} from 'vitest';
import { render, screen } from '@testing-library/react';
import MyButton from '../Base1/MyButton';
describe('TEST MYBUTTON.JSX', ()=>{
    it('must render', ()=>{
        const prop = "Usuario";
        render(<MyButton name={prop}/>);
        const button = screen.getByText(`${prop} Dulce o Truco?`);
        expect(button).toBeInTheDocument();
    });
});