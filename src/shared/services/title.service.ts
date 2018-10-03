import {Injectable} from '@angular/core';

@Injectable()
export class TitleService {

    private _names: any[] = ['buy', 'exchange', 'sell'];
    private _maxWords: number = 10;
    private _minLetters: number = 3;
    private _isLastWord: boolean = false;
    private _newArr: any[] = [];

    public getTitle() {

        this._createArr(0, true, false);

        return this._newArr;
    }

    private _createArr(index: number, isNew: boolean, isNext: boolean) {

        if (isNew) {

            this._isNewWord(this._names[index]);

            this._destroyWord(this._names[index], index);

        } else if (isNext) {

            this._createWord(this._names[index], index);
        }

        return this._newArr;
    }

    private _isNewWord(word: string) {

        for (let i = 0; i < this._maxWords; i++) {
            this._newArr.push(word);
        }
    }

    private _destroyWord(word: string, index: number) {

        for (let j = word.length; j > 0; j--) {

            const curWord = this._newArr[this._newArr.length - 1];

            if (j !== 1) {

                this._changeLetter(curWord, j, false, false);
                this._changeLetter(curWord, j, false, false);

            } else if (this._names[index + 1]) {

                const curLetter = this._names[index + 1][0];

                this._changeLetter(curWord, j, curLetter, false);
                this._changeLetter(curWord, j, curLetter, false);

                this._createArr(index + 1, false, true);
            }

            if (j !== word.length && curWord.length > this._minLetters) {

                this._deleteLetter(curWord);
            }

            if (!this._names[index + 1] && j === 1) {

                this._isLastWord = true;

                this._changeLetter(curWord, j, this._names[0][0], false);
                this._createWord(this._names[0], 0);
            }
        }
    }

    private _createWord(word: string, index: number) {

        for (let i = 1; i < word.length; i++) {

            const curWord = this._newArr[this._newArr.length - 1];

            this._changeLetter(curWord, i + 1, false, true);
            this._changeLetter(curWord, i + 1, false, true);

            this._changeLetter(curWord, i, word[i], true);
        }

        if (!this._isLastWord) {

            this._createArr(index, true, false);
        }

    }

    private _deleteLetter(word: any) {

        word = Array.from(word);
        word.pop();

        this._newArr.push(word.join(''));
    }

    private _changeLetter(word: any, index: number, letter: any, up: boolean) {

        const possibleLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        const curLetter = letter ? letter : possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
        const curIndex = up ? index : index - 1;

        word = Array.from(word);

        if (!up && index + 1 === word.length) {
            word.splice(index, 1, possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length)));
        }

        word.splice(curIndex, 1, curLetter);

        this._newArr.push(word.join(''));
    }
}
