import { RtcTokenBuilder, RtcRole } from "agora-access-token";

const APP_ID = process.env.AGORA_APP_ID;
const APP_CERTIFICATE = process.env.AGORA_APP_CERTIFICATE;

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { channelName, uid } = req.body;

  if (!channelName) {
    return res.status(400).json({ error: "Channel name é obrigatório" });
  }

  const role = RtcRole.PUBLISHER;
  const expireTime = 3600; // 1 hora
  const currentTime = Math.floor(Date.now() / 1000);
  const privilegeExpireTime = currentTime + expireTime;

  const token = RtcTokenBuilder.buildTokenWithUid(
    APP_ID,
    APP_CERTIFICATE,
    channelName,
    uid || 0,
    role,
    privilegeExpireTime
  );

  return res.status(200).json({
    token,
    channelName,
    uid: uid || 0,
    expireAt: privilegeExpireTime
  });
}
