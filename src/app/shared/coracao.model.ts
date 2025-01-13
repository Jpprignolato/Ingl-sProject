export class Coracao {
    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = 'coracao_cheio.png',
        public urlCoracaoVazio: string = 'coracao_vazio.png'
    ) {}

    public existeCoracao(): string {
        if(this.cheio) {
            return this.urlCoracaoCheio
        } else {
            return this.urlCoracaoVazio
        }
    }
}