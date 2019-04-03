package first.room.test;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class testMybatis {
    public static void main(String[] args){
        ApplicationContext context = new ClassPathXmlApplicationContext("ApplicationContext.xml");
        System.out.println(context.getBean("dataSource"));
    }
}
