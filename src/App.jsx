import React, { useEffect } from "react";
import axios from "axios";

const apiKey = "sk-f5d4a1977947485f8153aa4361a1ff25";  
const baseURL = "https://dashscope.aliyuncs.com/compatible-mode/v1";  

export default () => {
  const completion = async (documentation) => {  
    try {  
        const response = await axios.post(  
            `${baseURL}/chat/completions`,  // 确保这个URL是正确的  
            {  
                model: "qwen-turbo",  
                messages: [  
                    { role: "system", content: "You are a helpful assistant." },  
                    { role: "user", content: `根据以下文档生成相应的接口代码:\n\n${documentation}` }  
                ]  
            },  
            {  
                headers: {  
                    'Authorization': `Bearer ${apiKey}`,  // 认证头  
                    'Content-Type': 'application/json'     // 设置内容类型  
                }  
            }  
        );  

        console.log(JSON.stringify(response.data));  // 输出响应结果  
    } catch (error) {  
        console.error("Error during the API call:", error.response ? error.response.data : error.message);  
    }  
}; 
  const documentation = `  
API 文档:  
1. 用户注册接口:  
   - URL: /api/register  
   - 方法: POST  
   - 请求参数:  
     - username: string (必需)  
     - password: string (必需)  
   - 返回:  
     - 成功: { "message": "注册成功" }  
     - 失败: { "error": "用户名已存在" }  

2. 用户登录接口:  
   - URL: /api/login  
   - 方法: POST  
   - 请求参数:  
     - username: string (必需)  
     - password: string (必需)  
   - 返回:  
     - 成功: { "token": "JWT令牌" }  
     - 失败: { "error": "用户名或密码错误" }  
`;

  useEffect(() => {
    console.log(111)
    completion(documentation);
  }, []);

  return <div>测试一下1</div>;
};

// 示例文档，替换为你的实际文档内容
