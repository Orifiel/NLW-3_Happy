import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602966251204 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
				name: 'images',
				columns: [
				{
                name: "id", //identificação unica
                type: "integer", //esse valor é do tipo inteiro
                unsigned: true, // essa coluna sempre será positivo
                isPrimary: true, // indica que a coluna é a chave primaria
                isGenerated: true, // coluna gerada automaticamente
                generationStrategy: "increment" // usa a logica de incremento automatico
            },
				{
					name: "path",
					type: "varchar",
				},
				{
					name: "orphanage_id",
					type: "id"
				}

          ],
				foreignKeys:[
					{
						name: "ImageOrphanage",
						columnNames: ['orphanage_id'],
						referencedTableName: 'orphanages',
						referencedColumnNames: ['id'],
						onUpdate: 'CASCADE',
						onDelete: 'CASCADE',
						
					}
				]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable('images');
    }


}
