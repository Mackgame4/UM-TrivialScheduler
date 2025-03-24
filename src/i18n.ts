import { createI18n } from 'vue-i18n'

export const localeNames: Record<string, string> = {
    en: "English",
    pt: "Português"
};

const i18n = createI18n({
    legacy: false,
    locale: 'pt',
    fallbackLocale: 'en',
    messages: {
        en: {
            login: {
                forgotPassword: 'Forgot your password?',
                dontHaveAccount: 'Don\'t have an account?',
                alreadyHaveAccount: 'Already have an account?',
            }
        },
        pt: {
            login: {
                forgotPassword: 'Esqueceu a sua senha?',
                dontHaveAccount: 'Não tem uma conta?',
                alreadyHaveAccount: 'Já tem uma conta?',
            }
        }
    }
});

export default i18n;