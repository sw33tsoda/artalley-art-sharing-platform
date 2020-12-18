<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShowcaseArts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('showcase_arts', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('art_id')->unsigned();
            $table->bigInteger('user_id')->unsigned();
            $table->bigInteger('showcase_id')->unsigned();
            $table->timestamps();
        });

        Schema::table('showcase_arts', function (Blueprint $table) {
            $table->foreign('art_id')->references('id')->on('arts');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('showcase_id')->references('id')->on('showcases');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('showcase_arts');
    }
}
