1. properties属性文件
properties指的是java文件中的XXX.properties;
<properties resource='XXX.properties路径'>
    <property name='xxx' value=${}></property>
    <property name='xxx' value="${}"></property>
</properties>
2. setting配置
setting设置关系到Mybatis的主要设置，关系到Mybatis运行时的行为方式。
3. typeAliases实体类型别名
给java类型取了一个别名，放在核心配置、映射配置中来使用这个java类 例如不使用typeAliases时：
<update  id="" parameterType="com.model.entity"></update>
使用之后：
<typeAliases >
    <typeAlias alias="Entity" type="com.model.Entity"/>  
</typeAliases>
<update  id="" parameterType="Entity"></update>
可以简写实体路径；
typeHandlers类型句柄
ObjectFactory对象工程
plugins插件
environments环境
7. mappers映射器
<mappers>  
    <mapper resource="com/yu/res/UserMapper.xml" />  
</mappers>
或者
<mapper namespace="com.dao.EmployeeDao">
</mapper># HRMS
