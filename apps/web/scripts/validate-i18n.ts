import fs from 'fs'
import path from 'path'
import { z, translationSchema } from '@lib/core'

const i18nDir = path.join(__dirname, '..', 'i18n')
const files = fs.readdirSync(i18nDir).filter((f) => f.endsWith('.json'))

let hasError = false

console.log(`\n🔍 Validation des fichiers de langue:`)

for (const file of files) {
    const fullPath = path.join(i18nDir, file)
    const raw = fs.readFileSync(fullPath, 'utf-8')

    try {
        const parsed = JSON.parse(raw)
        const result = translationSchema.safeParse(parsed)

        if (!result.success) {
            console.error(`❌ ${file} est invalide :\n`, result.error.format())
            hasError = true
        } else {
            console.log(`✅ ${file} est valide`)
        }
    } catch (err) {
        console.error(`❌ Erreur dans ${file} : ${err}`)
        hasError = true
    }
}

if (hasError) {
    console.log(`\n⛔ Erreurs détectées dans les traductions. Fix required.\n`)
    process.exit(1)
} else {
    console.log(`\n🎉 Toutes les traductions sont valides.\n`)
}
