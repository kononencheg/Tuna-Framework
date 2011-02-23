<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" />
    
    <!-- Ссылка на узел с данными локализации -->
    <xsl:variable name="locale" select="root/locale" />
    
    <!-- Значение типа списка дней (для идентификаторов узлов списка) -->
    <xsl:variable name="list_type" select="root/day_list/@type" />
    
    <!-- Количество загрузок списка дне -->
    <xsl:variable name="load_count" select="root/day_list/@count" />
    
    <!-- Преобразование набора индексов дней недели в список имен -->
    <xsl:template match="/">	
    	
		<!-- Фильтрация узлов дней недели -->
		<xsl:apply-templates select="root/day_list/day" />
		
		<xsl:if test="root/day_list/day/@id = 0">
			Вторая половина
			<div id="last_half"></div>
		</xsl:if>
	</xsl:template>
	
	<!-- Шаблон отображения дней -->
	<xsl:template match="day">
		<!-- Узел DIV'а -->
		<div id="day_{@id}" class="WeekDay">

			<!-- Берем имя дня недели по индексу -->
			<xsl:call-template name="localize_day">
				<xsl:with-param name="day_id" select="@id" />
			</xsl:call-template>

			|
			<a href="javascript: void(0);">
				<xsl:value-of select="$load_count" />
			</a>
		</div>
	</xsl:template>
	
	<!-- Именованный шаблон преобразования индекса в локализованное имя -->
	<xsl:template name="localize_day">
		
		<!-- Идентификатор дня -->
		<xsl:param name="day_id" />
		
		<!-- Вывод локализированного имени по идентификатору -->
		<xsl:value-of select="$locale/day_name[@id = $day_id]" />
		
	</xsl:template>
</xsl:stylesheet>
