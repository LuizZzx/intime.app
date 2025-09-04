[README.md](https://github.com/user-attachments/files/22143102/README.md)
# Agora Token API

API Serverless (Vercel) para geração de tokens temporários da Agora.

## Como usar

1. Configure variáveis de ambiente no painel da Vercel:
   - `AGORA_APP_ID`
   - `AGORA_APP_CERTIFICATE`

2. Deploy na Vercel.

3. Endpoint disponível em:
   ```
   POST https://SEU-PROJETO.vercel.app/api/token
   ```

4. Exemplo de body:
   ```json
   {
     "channelName": "sala123",
     "uid": 1
   }
   ```

5. Resposta:
   ```json
   {
     "token": "xxxxxx",
     "channelName": "sala123",
     "uid": 1,
     "expireAt": 1693847000
   }
   ```
