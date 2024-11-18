import { NextApiRequest, NextApiResponse } from "next";

// http://localhost:3000/api/revalidate 에 접속해야지만 업데이트 됨
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await res.revalidate("/");
    return res.json({ revaildate: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Revalidation Failed");
    // 500은 서버에서 응답할 수 없을 때
    // 400은 클라이언트에서 잘못된 요청을 했을 때
  }
};
export default handler;
