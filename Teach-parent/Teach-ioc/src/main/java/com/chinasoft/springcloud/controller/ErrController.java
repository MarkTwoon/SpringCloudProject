package com.chinasoft.springcloud.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/*此控制器 专门作为设置项目首页
 * 及 访问错误管理机制处理  
 *  没有编写任何业务逻辑  处理杂项
 * 辅助性控制器*/
@Controller
public class ErrController implements ErrorController{

	/*首先 开始编写 项目首页 访问路径*/
	@RequestMapping("/")
	public String  showIndex(HttpServletRequest request){
		return "cityStart";
	}
	
	/*一旦项目报错 就访问指定error控制器
	 * 并且返回专门的报错处理方法*/
	@RequestMapping("/error")
	public String showError(HttpServletRequest request){
		return getErrorPath();
	}
	
	@Override
	public String getErrorPath() {
		// TODO Auto-generated method stub
		/*到达报错控制器  不区分报错类型
		 * 直接去访问 错误提示页面*/
		return "error";
	}

}
