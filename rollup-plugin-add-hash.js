import fs from 'fs';
import path from 'path';
export default function addHash (template, dest) {
    return {
        name: 'add-hash',
        generateBundle(opts, bundle) {
            const output = fs.readFileSync(template, 'utf-8')
            let code = output
            if(dest){
                let str = '<script src="'+dest+'[^>]*\></script>'
                let reg = new RegExp(str,'g');
                code = output.replace(reg,'<script src="'+dest+'?ver='+Date.now().toString()+'"></script>');
            }
            fs.writeFile(template,code,()=>{
                console.log('写入完成')
            });
        }
    };
}

module