<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('art_id')->unsigned();
            $table->text('comment')->nullable()->default(null);
            $table->tinyInteger('is_edited')->unsigned()->default(0);
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('art_id')->references('id')->on('arts')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
